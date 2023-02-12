
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/auth');
//mongoose.connect('mongodb://localhost:27017/rate');


var patientreg = new mongoose.Schema({
    email: { type: String, unique: true },
    file: []

});

var testmodel = mongoose.model('test', patientreg);
module.exports = testmodel;