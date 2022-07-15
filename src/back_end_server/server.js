/**
 * CSCI 4177 Assignment 3 
 * - HTTP server, Port:8080
 * developed by xinlong
 */
 const http = require("http");
 const app = require("./app");
 const port = process.env.PORT || 8080;
 
 const server = http.createServer(app);
 server.listen(port, '0.0.0.0', () => {
     console.log("Assignment 3 Server developed by XinLong (group 3) is Running!");
 })