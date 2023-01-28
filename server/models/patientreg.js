
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/auth');
//mongoose.connect('mongodb://localhost:27017/rate');


var patientreg = new mongoose.Schema({
    fullname: String,
    phonenumber: String,
    email: { type: String, unique: true },
    password: String,
    confirmpassword: String,
    role: String
});

var patientregmodel = mongoose.model('patientreg', patientreg);
module.exports = patientregmodel;