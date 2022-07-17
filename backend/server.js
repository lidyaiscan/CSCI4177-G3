const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
//added by xinlong for Authen feature!
const userRouter = require("./api/router/users");
const port = process.env.PORT || 4000;

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
//Router for Authen feature added by Xinlong !!
app.use("/authen", userRouter);

app.listen(port, function () {
    console.log("Server is running on port 4000");
})