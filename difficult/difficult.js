let buttons = new Array(9);
for (let i = 0; i < 9; ++i) {
    buttons[i] = document.getElementById("square" + (i + 1));
}
let winnercheck=false;
let drawcheck=false;
let tictaetoe=["X","O"];
let playernow = tictaetoe[Math.floor(Math.random() * tictaetoe.length)];
document.getElementById("result").innerHTML="You are player " + playernow ;
document.getElementById("squares").addEventListener("click",(event) => {
    let clickedbutton=event.target;
    if(clickedbutton.tagName=="BUTTON" && clickedbutton.innerHTML==""  && !winnercheck && !drawcheck) {
        clickedbutton.innerHTML = playernow;
        winner();
        draw();
        if (!winnercheck && !drawcheck) {
        computermove();
        }
    } 
})

function checkwinner() {
    const wincombo=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let computernow =playernow=="X" ? "O" : "X";
    let player=playernow;
    for(let i=0;i<wincombo.length;i++) {
        let [a,b,c]=wincombo[i];
        if(buttons[a].innerHTML!=="" && buttons[a].innerHTML===buttons[b].innerHTML && buttons[a].innerHTML===buttons[c].innerHTML) {
            if(buttons[a].innerHTML==computernow) 
                return "win";
            else
                return "lose";
        }
    }
    let draws=true;
    for(let i=0;i<buttons.length;i++) {
        if(buttons[i].innerHTML==="") {
            draws=false;
            break;
        }
}
if(draws && !winnercheck) {
    return "draw";
}

return null;
}
function minimax(score) {
    let result=checkwinner();
    if(result!=null) {
        if(result=="win")
        return 1;
    else if(result=="draw")
        return 0;
    else if(result=="lose")
        return -1;
    }
    let computernow =playernow=="X" ? "O" : "X";
    let max;
    if(score) {
        let bestscore=-Infinity;
        for(let i=0;i<9;i++) {
            if(buttons[i].innerHTML=="") {
                buttons[i].innerHTML=computernow;
                max=minimax(false);
                buttons[i].innerHTML="";
                bestscore=Math.max(bestscore,max);
            }
        }
        return bestscore;
    }
    else {
        let bestscore=Infinity;
        for(let i=0;i<9;i++) {
            if(buttons[i].innerHTML=="") {
                buttons[i].innerHTML=playernow;
                let max=minimax(true);
                buttons[i].innerHTML="";
                bestscore=Math.min(bestscore,max);
            }
        }
        return bestscore;
    }
}

function computermove() {
    let computernow =playernow=="X" ? "O" : "X";
    let position;
    let bestscore=-Infinity;
    for(let i=0;i<9;i++) {
        if(buttons[i].innerHTML=="") {
            buttons[i].innerHTML=computernow;
        let max=minimax(false);
        buttons[i].innerHTML="";
        if(max>bestscore) {
            bestscore = max;
            position=i;
        }
        }
    }
    buttons[position].innerHTML=computernow;
    winner();
    draw();
}
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
    winnercheck=false;
    drawcheck=false;
    playernow = tictaetoe[Math.floor(Math.random() * tictaetoe.length)];
    document.getElementById("result").innerHTML="You are player " + playernow ;
});