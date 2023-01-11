const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = 8000;

dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGOOSE_URL, () => {
    console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    res.send('Book store');
})

app.listen(port, () => {
    console.log('Server is running ...');
})