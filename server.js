const express = require('express');
const socket = require("socket.io")(80);
const app = express();
app.set("view engine", "ejs");
const port = 3000;

app.use("/public", express.static("./public"));
app.use("/", express.static("./node_modules"));
app.get('/', (req, res) => res.render('index', {}));

app.get("/room", (req, res) => {
    let name = req.query.name || "user";

    res.render("room", {name});
});

socket.on("connection", io => {
    io.on("user-send", user => {
        console.log(user);
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));