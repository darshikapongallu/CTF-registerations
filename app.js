require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv');
const path = require("path");
const cors = require("cors");
// dotenv.config({ path: __dirname + '/.env' });
const url = process.env.DATABASE_URL;
console.log(url); //
const port = process.env.PORT || 8000;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "./client/build")));

app.use(require(path.join(__dirname, "routes/user.js")));


if (process.env.NODE_ENV !== 'production') {
    app.use(express.static("client/build"));
}




app.listen(port, () => {
    console.log(`Server is Listening on the ${port}...`);
});