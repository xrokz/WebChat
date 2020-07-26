const socket = io('/');
console.log(name);
socket.emit("user-join", name);

socket.on("user-connected", username => {
    console.log("New User: ", username);
})