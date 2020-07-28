const express = require('express');
const app = express();
const server = require("http").Server(app);
const socket = require("socket.io")(server);

app.set("view engine", "ejs");
const port = 3000;

app.use("/public", express.static("./public"));
// app.use("/", express.static("./node_modules"));
app.get('/', (req, res) => res.render('index', {}));

app.get("/room", (req, res) => {
    let name = req.query.name || "user";

    res.render("room", {name});
});

socket.on("connection", io => {
    io.on("user-join", user => {
        socket.emit("user-connected", user)
        io.on('disconnect', data => {
            socket.emit("user-left", user)
        });
    });
    
    io.on("send-message", data => {
        socket.emit("new-message", data);
    });
    
});

server.listen(port, () => console.log(`WebChat app listening at http://localhost:${port} !`));