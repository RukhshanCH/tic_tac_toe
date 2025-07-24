let btn_1 = document.getElementById("1")
let btn_2 = document.getElementById("2")
let btn_3 = document.getElementById("3")
let btn_4 = document.getElementById("4")
let btn_5 = document.getElementById("5")
let btn_6 = document.getElementById("6")
let btn_7 = document.getElementById("7")
let btn_8 = document.getElementById("8")
let btn_9 = document.getElementById("9")
let winner = null;
let turn = "O"

function change_turn() {
    if (turn == "X") {
        turn = "O"
    }
    else {
        turn = "X"
    }
}
function isDraw() {
    const allBtns = [btn_1, btn_2, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, btn_9];
    if (allBtns.every(btn => btn.innerText !== "") && !winner) {
        setTimeout(() => alert("Draw!"), 400);
    }
}
function highlight(btns) {
    btns.forEach(btn => btn.classList.add("winner"));
}
function chk_win() {
    const combos = [
        [btn_1, btn_2, btn_3],
        [btn_4, btn_5, btn_6],
        [btn_7, btn_8, btn_9],
        [btn_1, btn_4, btn_7],
        [btn_2, btn_5, btn_8],
        [btn_3, btn_6, btn_9],
        [btn_1, btn_5, btn_9],
        [btn_3, btn_5, btn_7],
    ];

    for (let combo of combos) {
        if (combo[0].innerText === combo[1].innerText &&
            combo[1].innerText === combo[2].innerText &&
            combo[0].innerText !== "") {
            winner = turn;
            highlight(combo);
            setTimeout(() => alert(turn + " Wins!"), 400);
            // setTimeout(() => reset(), 2000);
            return;
        }
    }
}

function reset() {
    const all = [btn_1, btn_2, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, btn_9]
    all.forEach(btn => {
        btn.innerText = ""
        btn.classList.remove("winner");
    });
    turn = "O"
    winner = null;
}

function turn_(btn) {
    change_turn();
    if (btn.innerText === "" && !winner) {
        btn.innerText = turn;
        chk_win();
        isDraw();
    }
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
