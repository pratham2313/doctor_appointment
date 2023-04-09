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
const adminregmodel = require('./models/adminreg');
const verifierregmodel = require('./models/verifierreg');
const jwt = require('jsonwebtoken');
const jwtkey = "naruto";
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



// .............................................add appointment details of patient with their doctor details.........................................

app.post('/addappoinfo', async (req, res) => {
    var appodetails = new appoinfomodel({
        docname: req.body.docname,
        email: req.body.email,
        patientname: req.body.patientname,
        patientemail: req.body.patientemail,
        phonenumber: req.body.phonenumber,
        gender: req.body.gender,
        date: req.body.date,
        slot: req.body.slot,
        slotnumber: req.body.slotnumber,
        appointmentstatus: "pending",
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
    const email = req.body.email;
    const date = req.body.date;
    const slotnumber = req.body.slotnumber;

    try {
        if (slotnumber == "1") {
            const result = await docAppointmentModel.updateOne({ email, date }, {
                $set: {
                    slot1: "true"
                }
            });
        }
        else if (slotnumber == "2") {
            const result = await docAppointmentModel.updateOne({ email, date }, {
                $set: {
                    slot2: "true"
                }
            });
        }
        else if (slotnumber == "3") {
            const result = await docAppointmentModel.updateOne({ email, date }, {
                $set: {
                    slot3: "true"
                }
            });
        }
        else if (slotnumber == "4") {
            const result = await docAppointmentModel.updateOne({ email, date }, {
                $set: {
                    slot4: "true"
                }
            });
        }
    }
    catch (e) {

    }

});
app.post('/changependingappointmentstatus', async (req, res) => {
    const docname = req.body.docname;
    const email = req.body.docmail;
    const patientemail = req.body.patientemail;
    const date = req.body.date;
    const slot = req.body.slot;
    const patientname = req.body.patientname;
    const patientnumber = req.body.patientnumber;

    try {
        const result = await appoinfomodel.updateOne({ email, date, slot, patientemail }, {
            $set: {
                appointmentstatus: "approved"
            }
        });
        res.status(200).json({ message: "ok" })
        sendapprovedstatusreport(docname, email, patientname, patientemail, date, slot);


    }
    catch (e) {
        res.status(200).json({ message: "error" });
    }

});
app.post('/changeapprovedappointmentstatus', async (req, res) => {
    const docname = req.body.docname;
    const email = req.body.docmail;
    const patientemail = req.body.patientemail;
    const date = req.body.date;
    const slot = req.body.slot;
    const patientname = req.body.patientname;
    const patientnumber = req.body.patientnumber;

    try {
        const result = await appoinfomodel.updateOne({ email, date, slot, patientemail }, {
            $set: {
                appointmentstatus: "done"
            }
        });
        res.status(200).json({ message: "ok" })
        senddonestatusreport(docname, email, patientname, patientemail, date, slot);


    }
    catch (e) {
        res.status(200).json({ message: "error" });
    }

});

app.post('/findpendingappointmentofpatient', async (req, res) => {

    const patientemail = req.body.email;
    const appointmentstatus = "pending"
    const patient = await appoinfomodel.find({ patientemail, appointmentstatus });

    res.status(200).json({ patientinfo: patient })

});
app.post('/finddoneappointmentofpatient', async (req, res) => {

    const patientemail = req.body.email;
    const appointmentstatus = "done"
    const patient = await appoinfomodel.find({ patientemail, appointmentstatus });

    res.status(200).json({ patientinfo: patient })

});
app.post('/findapprovedappointmentofpatient', async (req, res) => {

    const patientemail = req.body.email;
    const appointmentstatus = "approved"
    const patient = await appoinfomodel.find({ patientemail, appointmentstatus });

    res.status(200).json({ patientinfo: patient })

});


// for doctor
app.post('/findpendingappointmentofdoctor', async (req, res) => {
    // console.log("in pendding")
    const email = req.body.email;
    const appointmentstatus = "pending"
    const doctor = await appoinfomodel.find({ email, appointmentstatus });

    res.status(200).json({ docinfo: doctor })

});
app.post('/finddoneappointmentofdoctor', async (req, res) => {

    const email = req.body.email;
    const appointmentstatus = "done"
    const doctor = await appoinfomodel.find({ email, appointmentstatus });

    res.status(200).json({ docinfo: doctor })

});
app.post('/findapprovedappointmentofdoctor', async (req, res) => {

    const email = req.body.email;
    const appointmentstatus = "approved"
    const doctor = await appoinfomodel.find({ email, appointmentstatus });

    res.status(200).json({ docinfo: doctor })

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
                    jwt.sign({ oldUser, role: "patient", issignin: "true" }, jwtkey, { expiresIn: "2h" }, (err, token) => {
                        if (err) {
                            res.json({ message: 'error' });
                        }
                        else {
                            // console.log(token);
                            res.status(200).json({ message: 'ok', token: token });
                        }

                    })

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
    const password = req.body.password;
    const encryptPassword = await bcrypt.hash(password, 7);

    console.log(req.body.specialty);
    var docdetails = new docregmodel({
        fullname: req.body.fullname,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        password: encryptPassword,
        specialty: req.body.specialty,
        role: "Unverified Doctor",
        filedoc: req.body.filedoc,
        slot1time: "09:00 am",
        slot2time: "11:00 am",
        slot3time: "04:00 pm",
        slot4time: "06:00 pm",
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

app.post("/changes", async (req, res) => {
    console.log("changes called");
    const email = req.body.email;
    const user = await docregmodel.findOne({ email });
    if (user) {
        console.log(user);
        const result = await docregmodel.updateOne({ email }, {
            $set: {
                fullname: req.body.fullname,
                email: req.body.email,
                phonenumber: req.body.phonenumber,
                slot1time: req.body.slot1time,
                slot2time: req.body.slot2time,
                slot3time: req.body.slot3time,
                slot4time: req.body.slot4time
            }
        });
        console.log(user);
        res.status(200).json({ message: "ok" });
    }
    else {
        res.status(200).json({ message: "err" });
    }
})

app.post('/findpatient', async (req, res) => {
    const email = req.body.email;
    const patient = await patientregmodel.find({ email });

    res.status(200).json({ patientinfo: patient })


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
app.get("/patient/get", async (req, res) => {

    const users = await patientregmodel.find();
    if (users) {
        res.status(200).json({ vdata: users });
    }
    else {
        res.status(500).send(err);
    }
})
app.get("/verifier/get", async (req, res) => {
    const users = await verifierregmodel.find();
    if (users) {
        res.status(200).json({ vdata: users });
    }
    else {
        res.status(500).send(err);
    }
})
app.get("/appointment/get", async (req, res) => {
    // const email = request.data.docmail;
    const users = await appoinfomodel.find();
    if (users) {
        res.status(200).json({ vdata: users });
    }
    else {
        res.status(500).send(err);
    }
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
// app.post("/ss", (req, res) => {
//     var datetime = new docAppointmentModel({
//         date: "2023-03-07",
//         email: "zeel@gamil.com",
//         docname: "zeel",
//         slot1: "true",
//         slot2: "false",
//         slot3: "true",
//         slot4: "false",
//     });
//     datetime.save((err, req1) => {
//         if (err) {
//             console.log("error occure");
//         }
//         else {
//             console.log("done");
//         }
//     })
// })
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
const sendunderapproval = (name, email, token) => {
    // console.log("Inside sendconfirm");
    transport
        .sendMail({
            from: user,
            to: email,
            subject: "Appointment Booking",
            html: `
            <h2>Congratulation</h2>
            <h3> You are verified </h3>
            <h4> Now you can login into your account </h4>
            </div>`,
        })
        .catch((err) => console.log(err));
};
const sendConfirmationEmail = (name, email, token) => {
    console.log("Inside sendconfirm");
    transport
        .sendMail({
            from: user,
            to: email,
            subject: "Appointment Booking",
            html: `
            <h2>Greetings Mr/Miss ${name}</h2>
            <h4> You will be verified in next 24 hours </h4>
            <h4> please keep checking your mailbox</h4>
            </div>`,
        })
        .catch((err) => console.log(err));
};
const sendpendingappo = (docname, email, patientname, patientemail, date, slot) => {
    console.log("Inside sendconfirm");
    transport
        .sendMail({
            from: user,
            to: patientemail,
            subject: "Appointment Booking",
            html: `
            <h2>Greetings Mr/Miss ${patientname}</h2>
            <h3>Your appointment request has been submitted successfully for date : ${date} at ${slot}</h3>
            <h4>we will notify you when your appointment is confirmed by Dr. ${docname} </h4>
            <p>You can contact your doctor through this mail ${email}</p>
            </div>`,
        })
        .catch((err) => console.log(err));
};
const sendapprovedstatusreport = (docname, email, patientname, patientemail, date, slot) => {
    transport
        .sendMail({
            from: user,
            to: patientemail,
            subject: "Appointment Booking",
            html: `
            <h2>Mr/Miss ${patientname}</h2>
            <h3>Your appointment is approved by <u>Dr.${docname}</u> for Date: <u>"${date}"</u> at <u>"${slot}"</u></h3>
            <p>On the Date of "${date}" at "${slot}" video call key will be send on your mail</p>
            <p>Key is private..so don't share with anyone</p>
            <p>You can contact doctor on this mail : ${email}</p>
            </div>`,
        })
        .catch((err) => console.log(err));
};
const senddonestatusreport = (docname, email, patientname, patientemail, date, slot) => {
    transport
        .sendMail({
            from: user,
            to: patientemail,
            subject: "Appointment Booking",
            html: `
            <h2>Mr/Miss ${patientname}</h2>
            <h3>Thanks from <u>Dr.${docname}</h3>
            <p>Appointment for </u> for Date: <u>"${date}"</u> has been done</p>
            <p>We asume that your problem has been sloved by Dr. ${docname}</p>
            <p>Thanks from Sayona team for your trust</p>
            <p>For any complaint send mail on <a href=https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzGsltMvLWNCsVvXJpNqxjVbgbbd?compose=GTvVlcRwQnZvsWwLzSdSlDmVPmbQCnBVkBwjXKMNnWMGgwJqFnNfjnsxHBnRWQHdtfwkSrtMGjFDz>sayona@gmail.com</a></p>
            </div>`,
        })
        .catch((err) => console.log(err));
};
const sendvideocallid = (patientname, patientemail, id) => {
    transport
        .sendMail({
            from: user,
            to: patientemail,
            subject: "Appointment Booking",
            html: `
            <h2>Mr/Miss ${patientname}</h2>
            <h3>${id} : is your videocall id</h3>
            <p>Meeting id is valid untill meeting ends</p>
            <p>Key is private..so don't share with anyone</p>
            </div>`,
        })
        .catch((err) => console.log(err));
};
app.post("/afterdocreg", (req, res) => {
    const name = req.body.fullname;
    const email = req.body.email;
    sendConfirmationEmail(name, email, "");
})
app.post("/afterdocverified", (req, res) => {
    console.log(req.body.doctormail);
    const email = req.body.doctormail;
    sendunderapproval("", email, "");
})

app.post("/afterappobook", (req, res) => {
    const docname = req.body.docname;
    const email = req.body.email;
    const patientname = req.body.patientname;
    const patientemail = req.body.patientemail;
    const date = req.body.date;
    const slot = req.body.slot;

    sendpendingappo(docname, email, patientname, patientemail, date, slot);
})
app.post("/sendvideocallid", async (req, res) => {
    const patientemail = req.body.patientemail;
    // console.log(req.body.patientemail);
    const patientname = req.body.patientname;
    const id = req.body.callid;
    sendvideocallid(patientname, patientemail, id)
    res.status(200).json({ message: "ok" });
})




//............................. Audio Video call .......................//
const http = require("http");
const { send } = require('process');
const { error } = require('console');
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
    socket.on("patientdisconnect", (data) => {
        // socket.emit("endfromboth", { callend: data.callend });
        io.to(data.userTocall).emit("endfrompatient", { callend: data.callend });
    })
    socket.on("doctordisconnect", (data) => {
        console.log("disconnect from doctor");
        // socket.emit("endfromboth", { callend: data.callend });
        io.to(data.to).emit("endfromdoctor", { callend: data.callend });
    })
    socket.on("disconnect", (data) => {

        socket.broadcast.emit("callEnded")
    })

    socket.on("callUser", (data) => {
        console.log("server called data from patient")
        io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
    })

    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal)
    })
})
socket.listen(8001, () => console.log("Videocall server is running on port 8001"))



// ....................................nilkanth code...........................


// verifier registration
app.post("/verifierreg", async (req, res) => {
    console.log("in verifier");
    const { name, email, password } = req.body;
    //console.log("register call");

    const encryptPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await verifierregmodel.findOne({ email });
        console.log(oldUser);
        if (oldUser) {
            //console.log("old usercall");
            res.json({ message: "Exists" });
        }
        else {
            console.log("in else");
            await verifierregmodel.create({
                name,
                email,
                password: encryptPassword,
                role: "verifier"
            });
            res.json({ message: "ok" });
        }
    } catch (error) {
        res.json({ message: "error" });
    }
});

// verifier login...
app.post("/verifierlogin", async (req, res) => {
    const { email, password } = req.body;
    //const encryptPassword = await bcrypt.hash(password, 10);
    // console.log(req.body.email);
    // console.log(req.body.password);
    try {


        const user2 = await verifierregmodel.findOne({ email });
        //console.log(oldUser.length);
        if (user2) {
            //console.log(encryptPassword);
            bcrypt.compare(password, user2.password, function (err, isMatch) {
                if (err) {
                    throw err
                } else if (!isMatch) {
                    //console.log("doesn'tmatch!")
                    res.json({ message: "don'tmatch" });
                } else {
                    jwt.sign({ user2, role: "verifier", issignin: "true" }, jwtkey, { expiresIn: "2h" }, (err, token) => {
                        if (err) {
                            res.json({ message: 'error' });
                        }
                        else {
                            // console.log(token);
                            res.status(200).json({ message: 'ok', token: token });
                        }

                    })

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


// admin registration....
app.post("/adminreg", async (req, res) => {
    const { name, email, password } = req.body;
    //console.log("register call");
    const encryptPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await adminregmodel.findOne({ email });
        console.log(oldUser);
        if (oldUser) {
            //console.log("old usercall");
            res.json({ message: "Exists" });
        }
        else {
            await adminregmodel.create({
                name,
                email,
                password: encryptPassword,
                role: "admin"
            });
            res.json({ message: "ok" });
        }
    } catch (error) {
        res.json({ message: "error" });
    }
});

// admin login

app.post("/adminlogin", async (req, res) => {
    const { email, password } = req.body;
    try {


        const user1 = await adminregmodel.findOne({ email });
        //console.log(oldUser.length);
        if (user1) {
            //console.log(encryptPassword);
            bcrypt.compare(password, user1.password, function (err, isMatch) {
                if (err) {
                    throw err
                }
                else if (!isMatch) {
                    res.json({ message: "don'tmatch" });
                }
                else {
                    jwt.sign({ user1, role: "admin", issignin: "true" }, jwtkey, { expiresIn: "2h" }, (err, token) => {
                        if (err) {
                            res.json({ message: 'error' });
                        }
                        else {
                            res.status(200).json({ message: 'ok', token: token });
                        }

                    })
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





// doc login

app.post("/doclogin", async (req, res) => {
    const { email, password } = req.body;
    //const encryptPassword = await bcrypt.hash(password, 10);
    // console.log(req.body.email);
    // console.log(req.body.password);
    try {


        const user = await docregmodel.findOne({ email });
        //console.log(oldUser.length);
        if (user) {
            if (user.role == "Verified") {
                bcrypt.compare(password, user.password, function (err, isMatch) {
                    if (err) {
                        throw err
                    }
                    else if (!isMatch) {
                        res.json({ message: "don'tmatch" });
                    }
                    else {
                        jwt.sign({ user, role: "doctor", issignin: "true" }, jwtkey, { expiresIn: "2h" }, (err, token) => {
                            if (err) {
                                res.json({ message: 'error' });
                            }
                            else {
                                res.status(200).json({ message: 'ok', token: token });
                            }
                        })
                    }
                })

            }
            else {
                res.status(200).json({ message: "unverified" });
            }


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



//..................................server port..................................

const port = 8080
const mode = "devlopment"


app.listen(port, () => {
    //console.log(`server running successfully on ${mode} mode on port ${port}`);
});



