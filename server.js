const express = require('express');
const app = express();
const server = require("http").Server(app);
const socket = require("socket.io")(server);

app.set("view engine", "ejs");
const port = process.env.PORT || 3000;
app.use("/public", express.static("./public"));
// app.use("/", express.static("./node_modules"));
app.get('/', (req, res) => res.render('index', {}));

app.get("/:room", (req, res) => {
    let name = req.query.name || "user";
    let room = req.params.room;

    res.render("room", {name, room});
});

socket.on("connection", io => {
    io.on("user-join", data => {
        io.join(data.room)
        socket.to(data.room).emit("user-connected", data.name)
        io.on('disconnect', data => {
             socket.to(data.room).emit("user-left", data.name)
        });
    });
    
    io.on("send-message", data => {
        socket.to(data.room).emit("new-message", data);
    });
    
});

server.listen(port, () => console.log(`WebChat app listening at http://localhost:${port} !`));