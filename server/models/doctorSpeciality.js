const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/auth');
//mongoose.connect('mongodb://localhost:27017/rate');


var docSpeciality = new mongoose.Schema({
    speciality: String,
});

var docSpecialityModel = mongoose.model('docSpeciality', docSpeciality);
module.exports = docSpecialityModel;