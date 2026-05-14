let buttons = new Array(9);
for (let i = 0; i < 9; ++i) {
    buttons[i] = document.getElementById("square" + (i + 1));
}

let currentplayer="X";
document.getElementById("result").innerHTML="Player " + currentplayer + " turns";
let winnercheck=false;
let drawcheck=false;
document.getElementById("squares").addEventListener("click",(event) => {
    let clickedbutton=event.target;
    if(clickedbutton.tagName==="BUTTON" && clickedbutton.innerHTML==="" && !winnercheck && !drawcheck)
    {
        clickedbutton.innerHTML=currentplayer;
        winner();
        draw();
        if(winnercheck || drawcheck) {
            return;
        }
        if(currentplayer==="X") {
            currentplayer="O";  
            document.getElementById("result").innerHTML="Player " + currentplayer + " turns";
        }
        else {
            currentplayer="X";
            document.getElementById("result").innerHTML="Player " + currentplayer + " turns";
        }
    }
})
function winner() {
    const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i=0;i<win.length;i++) {
        let [a,b,c]=win[i];
        if(buttons[a].innerHTML!=="" && buttons[a].innerHTML===buttons[b].innerHTML && buttons[a].innerHTML===buttons[c].innerHTML) {
        document.getElementById("result").innerHTML="Player " + buttons[a].innerHTML + " wins!";
        winnercheck=true;
        break;
    }
    }
}
function draw() {
    let draws=true;
    for(let i=0;i<buttons.length;i++) {
        if(buttons[i].innerHTML==="") {
            draws=false;
            break;
        }
}
if(draws && !winnercheck) {
    document.getElementById("result").innerHTML="It's a draw!";
    drawcheck=true;
}
}
document.getElementById("reset").addEventListener("click", (event) => {
        buttons.forEach((e, i) => {
        e.innerHTML = "";
    })
    currentplayer="X";
    winnercheck=false;
    drawcheck=false;
    document.getElementById("result").innerHTML="";
});

document.getElementById("back").addEventListener("click", (event) => {
    window.location.href="../index/index.html";
});