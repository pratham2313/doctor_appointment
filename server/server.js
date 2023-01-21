const express = require('express');

const appoinfomodel = require('./models/appoinfo');
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/remotedoctorconsulting');




const app = express();

app.use(express.json());
const cors = require('cors');
//var tools = require('./index');
app.use(cors({
    origin: '*'
}));


app.get('/', (req, res) => {
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
    appodetails.save(function (err, req1) {
        if (err) {
            console.log("error accour !");
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

const port = 8080
const mode = "devlopment"


app.listen(port, () => {
    //console.log(`server running successfully on ${mode} mode on port ${port}`);
});


