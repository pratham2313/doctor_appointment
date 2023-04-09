
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/auth');
//mongoose.connect('mongodb://localhost:27017/rate');


var docreg = new mongoose.Schema({
    fullname: String,
    phonenumber: String,
    email: { type: String, unique: true },
    password: String,
    specialty: String,
    role: String,
    filedoc: {
        name: "", size: "", type: ""
    },
    slot1time: String,
    slot2time: String,
    slot3time: String,
    slot4time: String
});

var docregmodel = mongoose.model('docreg', docreg);
module.exports = docregmodel;