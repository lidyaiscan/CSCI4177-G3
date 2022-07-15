/**
 * CSCI 4177 Assignment 3
 * database connection
 * developed by xinlong
 */
 const auth_db_server = require("./api/global/global");

 const express = require("express");
 const app = express();
 const bodyParser = require("body-parser");
 const mongoose = require("mongoose");
 const cors = require("cors");


 const userRouter = require("./api/router/users");

//connect mongodb

mongoose.connect(auth_db_server);
//middleware

 app.use(bodyParser.urlencoded({
    extended: true
 }));

 app.use(bodyParser.json());


 //set the router for API requests
 app.use("/authen", userRouter);
 //app.use("/prods", prodRouter);
 
 //cors
//  app.use(cors({
//    credentials: true,
//    origin: ['http://localhost:3000/', 'http://localhost:3001/'],
//    methods: ['GET', 'POST', 'PUT','DELETE','OPTIONS','PATCH'],
//    allowedHeaders:['x-access-token', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept']
//  }));
//  app.use((req, res, next) => {
//    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
//    next();
//  });
//   app.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
//    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
//    next();
//  });

 //reqests error handle 
//  app.use((req, res, next) => {

//     const error = new Error("Not Found");
//     error.status = 404;
//     next(error);
//  })

//  app.use((error, req, res, next) =>{
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             messages: error.messages
//         }
//     });
//  })
 
 module.exports = app;