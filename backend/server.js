const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//MongoDB connection
mongoose.connect("mongodb+srv://group3:csci4177@cluster0.s8dqb.mongodb.net/a3-csci4177?retryWrites=true&w=majority', { useNewUrlParser: true } ");
const connection = mongoose.connection;
connection.once('open', function () {
    console.log('Succesfully connected to MongoDB!');
})

//Routes
app.use("/", require("./routes/productRoute"));

app.listen(4000, function () {
    console.log("Server is running on port 4000");
})