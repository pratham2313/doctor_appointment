const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/auth');
//mongoose.connect('mongodb://localhost:27017/rate');


var docAppointment = new mongoose.Schema({
    date: String,
    email: String,
    docname: String,
    slot1: String,
    slot2: String,
    slot3: String,
    slot4: String,
    // slot1Time: "9:00 am",
    // slot2Time: "11:00 am",
    // slot3Time: "4:00 pm",
    // slot4Time: "6:00 pm",

});

var docAppointmentModel = mongoose.model('docAppointment', docAppointment);
module.exports = docAppointmentModel;