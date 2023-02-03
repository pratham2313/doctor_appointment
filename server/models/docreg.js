
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/auth');
//mongoose.connect('mongodb://localhost:27017/rate');


var docreg = new mongoose.Schema({
    fullname: String,
    phonenumber: String,
    email: { type: String, unique: true },
    specialty: String,
    role: String,
    filedoc: {
        name: "", size: "", type: ""
    },
});

var docregmodel = mongoose.model('docreg', docreg);
module.exports = docregmodel;