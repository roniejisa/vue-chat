var cors = require("cors");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
        allowedHeaders:"*",
        credentials:true,
	},
    transports: ['polling','websocket'],
    allowEIO3: true
});

server.listen(1234, () => {
	console.log("listening on *:1234");
});
io.on("connection", function (socket) {
	console.log("a user connected");
});
