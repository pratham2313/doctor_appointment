const express = require('express');
const appoinfomodel = require('./models/appoinfo');
const patientregmodel = require('./models/patientreg');
const docregmodel = require('./models/docreg');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
var crypto = require('crypto')
const path = require('path');
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const bcrypt = require('bcrypt');
//mongoose.connect('mongodb://localhost:27017/remotedoctorconsulting');
//mongoose.connect('mongodb://localhost:27017/remotedoctorconsulting');
const mongoUrl = "mongodb+srv://nill:nill4077@remotedoctorconsulting.z9hstsz.mongodb.net/remotedoctorconsulting?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

mongoose.connect(mongoUrl, {
    useNewUrlParser: true
}).then(() => { console.log("Connected to database"); })
    .catch(e => console.log(e));

const conn = mongoose.createConnection(mongoUrl);




const app = express();

app.use(express.json());
const cors = require('cors');
//var tools = require('./index');
app.use(cors({
    origin: '*'
}));


app.get('/', async (req, res) => {
    res.status(200).send({
        message: "server running successfully",
    });
    var appodetails = new appoinfomodel({
        Specialist: "Gynecology",
        docname: "Pratham",
        username: "Nilkanth",
        email: "123@gmail.com",
        phonenumber: "000000000",
        gender: "male",
        date: "10-12-2020",
        time: "4:50pm",
    });
    await appodetails.save(function (err, req1) {
        if (err) {
            console.log("error accour !");
            console.log(err);
        }
        else {
            console.log("details added");
        }
    });

});
app.post('/addappoinfo', (req, res) => {
    res.status(200).send({
        message: "server running successfully",
    });
    var appodetails = new appoinfomodel({
        specialist: req.body.specialist,
        docname: req.body.docname,
        username: req.body.username,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        gender: req.body.gender,
        date: req.body.date,
        time: req.body.time,
    });
    appodetails.save(function (err, req1) {
        if (err) {
            console.log("error accour !");
        }
        else {
            console.log("details added");
        }
    });

});




//patient registration.....
app.post("/register", async (req, res) => {
    const { fullname, phonenumber, email, password } = req.body;
    //console.log("register call");

    const encryptPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await patientregmodel.findOne({ email });
        console.log(oldUser);
        if (oldUser) {
            //console.log("old usercall");
            res.json({ message: "Exists" });
        }
        else {
            await patientregmodel.create({
                fullname,
                phonenumber,
                email,
                password: encryptPassword,
                role: "patient"
            });
            res.json({ message: "ok" });
        }
    } catch (error) {
        res.json({ message: "error" });
    }
});


//patient login

app.post("/patientlogin", async (req, res) => {
    const { email, password } = req.body;
    //const encryptPassword = await bcrypt.hash(password, 10);
    //console.log(req.body.email);
    try {


        const oldUser = await patientregmodel.findOne({ email });
        //console.log(oldUser.length);
        if (oldUser) {
            //console.log(encryptPassword);
            bcrypt.compare(password, oldUser.password, function (err, isMatch) {
                if (err) {
                    throw err
                } else if (!isMatch) {
                    //console.log("doesn'tmatch!")
                    res.json({ message: "don'tmatch" });
                } else {
                    //console.log("ok")
                    res.status(200).json({ message: 'ok' });
                }
            })
            // if (oldUser.password === encryptPassword) {
            //     res.status(200).json({ message: 'ok' });
            // }
            // else {
            //     res.json({ message: "don'tmatch" });
            // }

        }
        else {
            res.json({ message: 'error' });
        }

        //console.log('this ran too');

    }
    catch (error) {
        console.log('can not get last record');
        console.log(error);

    }

})


///docreg and file upload....

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cd) {
            cd(null, "uploads")
        },
        filename: function (req, file, cd) {
            cd(null, file.originalname)
        }
    }),
    fileFilter: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        if (ext != ".pdf") {
            //console.log("i am in if");
            return cb(new Error("Only pdf file is allowed"));

        }
        cb(null, true);
    }
});
var uploadsingle = upload.single('docfile');
// conn.once('open', () => {
//     // Init stream
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection('uploads');
// });
// const storage = new GridFsStorage({
//     url: mongoUrl,
//     file: (req, file) => {
//         return new Promise((resolve, reject) => {
//             crypto.randomBytes(16, (err, buf) => {
//                 if (err) {
//                     return reject(err);
//                 }
//                 const filename = buf.toString('hex') + path.extname(file.originalname);
//                 // if (ext != ".pdf") {
//                 //     return cb(new Error("Only pdf file is allowed"));
//                 // }
//                 const fileInfo = {
//                     filename: filename,
//                     bucketName: 'uploads'
//                 };
//                 resolve(fileInfo);
//             });
//         });
//     }
// });
// const upload = multer({ storage });

app.post("/check", async (req, res) => {
    const { fullname, phonenumber, email, filedoc } = req.body;
    //console.log(filedoc);
    //console.log(email);
    const oldUser = await docregmodel.findOne({ email });
    //console.log(oldUser.length);
    if (oldUser) {
        //console.log("i am in if");
        res.status(200).json({ message: "Exists" });
    }
    else {
        res.status(200).json({ message: "ok" });
    }
})
app.post("/docreg", async (req, res) => {
    // const { fullname, phonenumber, email, filedoc } = req.body;
    // //console.log(filedoc);
    // //console.log(email);
    // const oldUser = await docregmodel.findOne({ email });
    // //console.log(oldUser.length);
    // if (oldUser) {
    //     //console.log("i am in if");
    //     res.status(200).json({ message: "Exists" });
    // }

    //console.log(" i am in else");
    var docdetails = new docregmodel({
        fullname: req.body.fullname,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        role: "Unverified Doctor",
        filedoc: req.body.filedoc
    })
    docdetails.save(function (err, req1) {
        if (err) { res.status(500).send({ message: "error" }); }
        else {
            res.status(200).send({ message: "ok" });
        }
        //res.setHeader('Content-Type', 'text/html');
        //console.log('docreg is inserted');

    })



})

// app.post("/upload", upload.fields([
//     {
//         name: "docfile",
//         maxCount: 1
//     },

// ]),



// );
app.post("/upload", (req, res) => {
    uploadsingle(req, res, (err) => {
        if (err) {
            //console.log(" i am in 2nd if");
            res.status(200).json({ message: "only pdf file are allowed" });
        }
        else {
            res.status(200).json({ message: "okk" });
        }
        //console.log(req.file);
    })


}
);

// app.post('/upload', upload.single('docfile'), (req, res) => {
//     // res.json({ docfile: req.docfile });
//     console.log(req.body.docfile)
// })

const port = 8080
const mode = "devlopment"


app.listen(port, () => {
    //console.log(`server running successfully on ${mode} mode on port ${port}`);
});


