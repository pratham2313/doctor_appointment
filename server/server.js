const express = require('express');
const appoinfomodel = require('./models/finalappoinformationofdoctorandpatient');
const patientregmodel = require('./models/patientreg');
const docregmodel = require('./models/docreg');
const docSpecialityModel = require('./models/doctorSpeciality');
const docAppointmentModel = require('./models/docAppointment_date_slottime');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
var crypto = require('crypto')
const path = require('path');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const bcrypt = require('bcrypt');

const request = require('request');
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

// app.get('/', async (req, res) => {
//     var docSpeciality = new docSpecialityModel({
//         speciality: "Radiologist",
//         name: "ganpatbhai",
//     });
//     docSpeciality.save((err, req1) => {
//         if (err) {
//             console.log("error occure");
//         }
//         else {
//             console.log("done");
//         }
//     })
// })

app.get('/getSpeciality', async (req, res) => {
    // var docSpeciality = new docSpecialityModel({
    //     speciality: "Radiologist",
    // });
    // docSpeciality.save((err, req1) => {
    //     if (err) {
    //         console.log("error occure");
    //     }
    //     else {
    //         console.log("done");
    //     }
    // })
    const allspeciality = await docSpecialityModel.find();
    // console.log("i am specialist")
    res.status(200).json({ specialistdata: allspeciality });
})

app.post('/addappoinfo', (req, res) => {
    var appodetails = new appoinfomodel({
        docname: req.body.docname,
        email: req.body.email,
        patientname: req.body.patientname,
        patientemail: req.body.patientemail,
        phonenumber: req.body.phonenumber,
        gender: req.body.gender,
        date: req.body.date,
        slot: req.body.slot,
        appointmentstatus: "pendding",
    });
    appodetails.save(async function (err, req1) {
        if (err) {
            console.log("error accour !");
        }
        else {
            // const docuser = await docAppointmentModel.findOne({ email });
            console.log("appointment done");
            res.status(200).json({ message: "done" });

        }
    });

});



/////////////////...................................patient.................................///////////////

//.................................................................patient registration.............................................
app.post("/register", async (req, res) => {
    const { fullname, phonenumber, email, password } = req.body;
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


//............................................................patient login...........................................

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


///................................................file upload (binary).........................................


// conn.once('open', () => {
//     // Init stream
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection('uploads');
// });
// const storage = new GridFsStorage({
//     url: mongoUrl,
//     file: (req, file) => {
//         if (file.mimetype == "pdf") {
//             return new Promise((resolve, reject) => {
//                 crypto.randomBytes(16, (err, buf) => {
//                     if (err) {
//                         return reject(err);
//                     }
//                     // const filename = buf.toString('hex') + path.extname(file.originalname);
//                     const filename = file.originalname;
//                     // if (ext != ".pdf") {
//                     //     return cb(new Error("Only pdf file is allowed"));
//                     // }
//                     const fileInfo = {
//                         filename: filename,
//                         bucketName: 'uploads'
//                     };
//                     resolve(fileInfo);
//                 });
//             });

//         }
//         else {
//             return reject("Only pdf file is allowed");
//             // return (new Error("Only pdf file is allowed"));
//         }

//     }
// });
// const upload = multer({ storage });

// app.post('/upload', upload.single('docfile'), (req, res) => {
//     // res.json({ docfile: req.docfile });
//     console.log(req.body.docfile)
// })

// app.post("/upload", upload.fields([
//     {
//         name: "docfile",
//         maxCount: 1
//     },

// ]),



// );



//.......................................................file upload (static folder).....................................

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
app.post("/upload", (req, res) => {
    uploadsingle(req, res, (err) => {
        if (err) {
            //console.log(" i am in 2nd if");
            res.status(200).json({ message: "only pdf file are allowed" });
        }
        else {
            res.status(200).json({ message: "okk" });
        }

    })


}
);




//...............................doctor registration.......................................


app.post("/docreg", async (req, res) => {

    console.log(req.body.specialty);
    var docdetails = new docregmodel({
        fullname: req.body.fullname,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        specialty: req.body.specialty,
        role: "Unverified Doctor",
        filedoc: req.body.filedoc,
        slot1time: "9:00 am",
        slot2time: "11:00 am",
        slot3time: "4:00 pm",
        slot4time: "6:00 pm",
    })
    docdetails.save(function (err, req1) {
        if (err) { res.status(500).send({ message: "error" }); }
        else {
            res.status(200).send({ message: "ok" });
        }


    })



})
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

//..............................................doctor card after processed for appointment booking...............................

app.post('/finddoc', async (req, res) => {
    const specialty = req.body.specialist;
    //console.log(specialty);
    const role = "Verified";
    const docinfo = await docregmodel.find({ specialty, role });
    console.log(docinfo);
    if (docinfo) {
        res.status(200).json({ message: "finddoc", docinfo: docinfo })
    }
    else {
        res.status(200).json({ message: "nodoc" });
    }


});
app.post('/finddocemail', async (req, res) => {
    const email = req.body.email;
    //console.log(specialty);
    const role = "Verified";
    const docinfo = await docregmodel.find({ email, role });
    //console.log(docinfo);

    res.status(200).json({ docinfo: docinfo })


});









////////////..............................verifier...................................//////////

//............................................................doctor get for verifier.............................................

app.get("/doctor/get", async (req, res) => {
    const verifieddoc = await docregmodel.find({ role: "Verified" });
    docregmodel.find({ role: "Unverified Doctor" }, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            const docdata = data;
            res.status(200).json({ docdata: docdata, vdata: verifieddoc });
            //console.log(data);
        }
    })


})

//....................................verifier change doctor status.............................

app.post("/changestatus", async (req, res) => {

    const email = req.body.doctormail
    try {
        const result = await docregmodel.updateOne({ email }, {
            $set: {
                role: "Verified"
            }
        });
        res.status(200).json({ message: "doctor verified" });
    }
    catch (e) {

    }

})

//.................................................read pdf...........................................


var read;
let fs = require('fs');
const { url } = require('inspector');
app.post("/getpdf", async (req, res) => {

    const email = req.body.docmail
    //console.log(req.body.docmail)
    const user = await docregmodel.findOne({ email });

    if (user) {
        //serverclose();
        console.log("getpdf callled");
        var url = "http://localhost:8080/readpdf";
        request(url, (error, res, body) => {

            if (error) console.log(error)
            read = fs.createReadStream(`uploads/${user.filedoc.name}`);
        });
        res.status(200).json({ message: "filenowread" });
    }


    else {

    }


})
app.get("/readpdf", (req, res) => {
    read.pipe(res);
})

// .......................................date time check for appointment....................................
app.post("/ss", (req, res) => {
    var datetime = new docAppointmentModel({
        date: "2023-03-07",
        email: "zeel@gamil.com",
        docname: "zeel",
        slot1: "true",
        slot2: "false",
        slot3: "true",
        slot4: "false",
    });
    datetime.save((err, req1) => {
        if (err) {
            console.log("error occure");
        }
        else {
            console.log("done");
        }
    })
})
app.post("/getdatetime", async (req, res) => {
    console.log(req.body.email);
    const email = req.body.email;
    const date = req.body.date;
    const docname = req.body.docname;
    //console.log(specialty);

    const datetimeinfo = await docAppointmentModel.findOne({ email, date });
    if (datetimeinfo) {
        console.log("i if part");
        res.status(200).json({ docinfo: datetimeinfo })
    }
    else {
        var datetime = new docAppointmentModel({
            date: date,
            email: email,
            docname: docname,
            slot1: "false",
            slot2: "false",
            slot3: "false",
            slot4: "false",
        });
        datetime.save(async (err, req1) => {
            if (err) {
                console.log("error occure");
            }
            else {
                console.log("done");
            }
            const datetimeinfo1 = await docAppointmentModel.findOne({ email, date });
            res.status(200).json({ docinfo: datetimeinfo1 })
        })
    }
    console.log(datetimeinfo);


});



// .................................Email sent................................

const user = "senderfromern@gmail.com";
const pass = "vgghkoksogbhhtve";

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: user,
        pass: pass,
    },
});
const sendConfirmationEmail = (name, email, token) => {
    console.log("Inside sendconfirm");
    transport
        .sendMail({
            from: user,
            to: email,
            subject: "Appointment Booking",
            html: `<h1>Email Confirmation</h1>
            <h2>Request from Shayona</h2>
            <p> Please confirm this email by clicking on the following link</p>
            <a href=http://localhost:3000/admin/dashboard> Click here</a>
            </div>`,
        })
        .catch((err) => console.log(err));
};
app.get("/", (req, res) => {
    sendConfirmationEmail("pratham", "patelpratham298@gmail.com", "");
})




//............................. Audio Video call .......................//
const http = require("http")
const socket = http.createServer(app)
const io = require("socket.io")(socket, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})



//............ videocall functionality.............//
io.on("connection", (socket) => {
    // console.log(socket.id, 'connected');
    const id = socket.id;
    socket.emit("me", id);
    // console.log(id);

    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded")
    })

    socket.on("callUser", (data) => {
        io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
    })

    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal)
    })
})
socket.listen(8001, () => console.log("Videocall server is running on port 8001"))





//..................................server port..................................

const port = 8080
const mode = "devlopment"


app.listen(port, () => {
    //console.log(`server running successfully on ${mode} mode on port ${port}`);
});



