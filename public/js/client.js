const socket = io('/');
console.log(name);
socket.emit("user-join", {name, room});

function send(e) {
    // console.log($("#msg")[0].which);
    if(e.which == 13) {
        //submit form via ajax, this is not JS but server side scripting so not showing here
        socket.emit("send-message", {room, name, msg: $("#msg").val()})
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
    // $("#area").html($("#area").html() + `<br/>${data.name}: ${data.msg}`)
    let el = document.createElement("div");
    el.innerHTML = `
    <div class="row">
        <div class="col-xs-1">
            <img src="/public/img/2.png" width="50" style="border-radius: 180%">
        </div>
        <div class="col">
            <strong>${data.name}</strong><p>${data.msg}</p>
        </div>
    </div>
    <hr>
    `
    el.style.float = "left";
    el.style.textAlign = "left";
    el.style.width = "100%";
    $("#area")[0].appendChild(el)
})
socket.on("user-connected", username => {
    $("#area").html($("#area").html() + `<br/><strong>${username}</strong> wants to chat <hr>`)
})

socket.on("user-left", data => {
    $("#area").html($("#area").html() + `<br/><strong>${data}</strong> don't want to keep talking <hr>`)
})

window.onbeforeunload = () => {
    socket.disconnect(name)
}