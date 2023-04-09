const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/auth');
//mongoose.connect('mongodb://localhost:27017/rate');


var appoinformation = new mongoose.Schema({
    docname: String,
    email: String,
    patientname: String,
    patientemail: String,
    phonenumber: String,
    gender: String,
    date: String,
    slot: String,
    slotnumber: String,
    appointmentstatus: String,
});

var appoinfomodel = mongoose.model('FinalAppointmentDetails', appoinformation);
module.exports = appoinfomodel;
// var ratemodel = mongoose.model('rateid',rateSchema);
// module.exports=ratemodel;