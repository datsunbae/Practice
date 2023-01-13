const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = 8000;

app.use(express.json());

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

//Config dotenv
dotenv.config();

//Connect MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGOOSE_URL, () => {
    console.log('Connected to MongoDB');
});

//Routes
routes(app);

app.listen(port, () => {
    console.log('Server is running ...');
})