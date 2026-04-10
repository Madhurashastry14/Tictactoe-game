
let computerlevel=document.getElementById("computerlevel");
let box=document.getElementById("box");
let options = document.getElementById("settingoption");
let play=document.getElementById("play");
document.getElementById("setting").onclick = function() {
    if (options.style.display === "none") {
        options.style.display = "block";
    } else {
        options.style.display = "none";
    }
};
document.getElementById("play").onclick = function() {
    if (box.style.display === "" || box.style.display === "none") {
        box.style.display = "flex";
    } else {
        box.style.display = "none";
    }
};
document.getElementById("player").onclick=function() {
    window.location.href="../player/player.html";
}
document.getElementById("computer").onclick = function() {
    computerlevel.style.display = "flex";
    box.style.display="none";
};
document.getElementById("easy").onclick=function() {
    window.location.href="../easy/easy.html";
}
document.getElementById("medium").onclick=function() {
    window.location.href="../medium/medium.html";
}
document.getElementById("difficult").onclick=function() {
    window.location.href="../difficult/difficult.html";
}