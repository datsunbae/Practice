const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    price: { type: Number, required: true },
    authors: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Author"}
    ],
    categories: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Category"}
    ]
},
{
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);