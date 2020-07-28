const socket = io('/');
console.log(name);
socket.emit("user-join", name);

function send(e) {
    // console.log($("#msg")[0].which);
    if(e.which == 13) {
        //submit form via ajax, this is not JS but server side scripting so not showing here
        socket.emit("send-message", {name, msg: $("#msg").val()})
        $("#msg").val("");
        e.preventDefault();
    }
}
$(function() {
    $("#msg").keypress((e) => {
        send(e);
    })
})
socket.on("new-message", data => {
    $("#area").html($("#area").html() + `<br/>${data.name}: ${data.msg}`)
})
socket.on("user-connected", username => {
    console.log("New User: ", username);
})