/**
 * HTTP server, Port:8080
 * developed by xinlong
 */
const http = require("http");
const app = require("./app");
const port = process.env.PORT || 8080;

const server = http.createServer(app);
server.listen(port, '0.0.0.0', () => {
    console.log("Server is running!");
})