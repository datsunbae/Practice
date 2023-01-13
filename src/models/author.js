const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: { type: String, required: true },
    birthday: { type: Date },
    gender: { type: Boolean, required: true},
    phone: { type: Number },
    email: { type: String }
},
{
    timestamps: true
});

module.exports = mongoose.model('Author', authorSchema);