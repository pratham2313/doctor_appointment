const express = require('express');
const appoinfomodel = require('./models/appoinfo');
const patientregmodel = require('./models/patientreg');
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


const port = 8080
const mode = "devlopment"


app.listen(port, () => {
    //console.log(`server running successfully on ${mode} mode on port ${port}`);
});


