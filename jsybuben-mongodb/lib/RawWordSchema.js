const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RawWordSchema = new Schema({
    text: String,
});

module.exports = RawWordSchema;