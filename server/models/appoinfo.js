const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/auth');
//mongoose.connect('mongodb://localhost:27017/rate');


var appoinformation = new mongoose.Schema({
    specialist: String,
    docname: String,
    username: String,
    email: String,
    phonenumber: String,
    gender: String,
    date: String,
    time: String,
});

var appoinfomodel = mongoose.model('appoinfo', appoinformation);
module.exports = appoinfomodel;
// var ratemodel = mongoose.model('rateid',rateSchema);
// module.exports=ratemodel;