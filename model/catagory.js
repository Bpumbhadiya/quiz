const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: String ,
    image: String
});

const CAT = mongoose.model('catagory', catSchema);

module.exports = CAT;
