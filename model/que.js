const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const queSchema = new Schema({
    question: String,
    option: [String],
    ans: String,
    catagory: String
});

const QUESTION = mongoose.model('que', queSchema);

module.exports = QUESTION;
