let btn_1 = document.getElementById("1")
let btn_2 = document.getElementById("2")
let btn_3 = document.getElementById("3")
let btn_4 = document.getElementById("4")
let btn_5 = document.getElementById("5")
let btn_6 = document.getElementById("6")
let btn_7 = document.getElementById("7")
let btn_8 = document.getElementById("8")
let btn_9 = document.getElementById("9")
let turn = "X"
let winner = null;

function change_turn() {
    if (turn == "X") {
        turn = "O"
    }
    else {
        turn = "X"
    }
}

function chk_win() {
    if (btn_1.innerText==btn_2.innerText&&btn_1.innerText==btn_3.innerText&&btn_1.innerText!="") {
        winner = turn;
        alert(turn + ' Win')
    }
    if (btn_4.innerText==btn_5.innerText&&btn_4.innerText==btn_6.innerText&&btn_4.innerText!="") {
        winner = turn;
        alert(turn + ' Win')
    }
    if (btn_7.innerText==btn_8.innerText&&btn_7.innerText==btn_9.innerText&&btn_7.innerText!="") {
        winner = turn;
        alert(turn + ' Win')
    }
    if (btn_1.innerText==btn_4.innerText&&btn_1.innerText==btn_7.innerText&&btn_1.innerText!="") {
        winner = turn;
        alert(turn + ' Win')
    }
    if (btn_2.innerText==btn_5.innerText&&btn_2.innerText==btn_8.innerText&&btn_2.innerText!="") {
        winner = turn;
        alert(turn + ' Win')
    }
    if (btn_3.innerText==btn_6.innerText&&btn_3.innerText==btn_9.innerText&&btn_3.innerText!="") {
        winner = turn;
        alert(turn + ' Win')
    }
    if (btn_1.innerText==btn_5.innerText&&btn_1.innerText==btn_9.innerText&&btn_1.innerText!="") {
        winner = turn;
        alert(turn + ' Win')
    }
    if (btn_3.innerText==btn_5.innerText&&btn_3.innerText==btn_7.innerText&&btn_3.innerText!="") {
        winner = turn;
        alert(turn + ' Win')
    }
}

function turn_(btn) {
    if(btn.innerText = turn) chk_win()
    // console.log(turn);
    // if (!winner) chk_win()
    change_turn();
}

function turn_1() {
    turn_(btn_1);
}
function turn_2() {
    turn_(btn_2);
}
function turn_3() {
    turn_(btn_3);
}
function turn_4() {
    turn_(btn_4);
}
function turn_5() {
    turn_(btn_5);
}
function turn_6() {
    turn_(btn_6);
}
function turn_7() {
    turn_(btn_7);
}
function turn_8() {
    turn_(btn_8);
}
function turn_9() {
    turn_(btn_9);
}
