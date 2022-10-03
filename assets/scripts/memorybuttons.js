document.addEventListener("DOMContentLoaded", function () {
    btn_diff("easy");
});

let game = {
    score: 0,
    max_score: 0,
    currentGame: "",
    userMoves: [],
    userChoices: ["button1", "button2", "button3", "button4", "button5", "button6"],
    turn: 0,
    turnInProcess: false,
    previousButton: ""
}

function btn_diff(diff) {
    switch (diff) {
        case "easy":
            game.max_score = 15;
            document.getElementById("easy-btn").classList.add("btn--active");
            document.getElementById("medium-btn").classList.remove("btn--active");
            document.getElementById("hard-btn").classList.remove("btn--active");
            break
        case "medium":
            game.max_score = 30;
            document.getElementById("easy-btn").classList.remove("btn--active");
            document.getElementById("medium-btn").classList.add("btn--active");
            document.getElementById("hard-btn").classList.remove("btn--active");
            break
        case "hard":
            game.max_score = 45;
            document.getElementById("easy-btn").classList.remove("btn--active");
            document.getElementById("medium-btn").classList.remove("btn--active");
            document.getElementById("hard-btn").classList.add("btn--active");
            break
        default:
            return "No difficulty selected";
    }
}

function beginGame(){
    game.score = 0;
    game.currentGame = [];
    game.userMoves = [];
    for (let button of document.getElementsByClassName("btn--big")) {
        if (button.getAttribute("data-listener") !== "true") {
            button.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnInProcess) {
                    let move = e.target.getAttribute("id");
                    game.previousButton = move;
                    lightUp(move);
                    game.userMoves.push(move);
                    playersTurn();
                }
            })
            button.setAttribute("data-listener", "true");
        }
    }
    displayScore();
    addTurn();
}

function addTurn() {
    game.userMoves = [];
    game.currentGame.push(game.userChoices[(Math.floor(Math.random() * 6))]);
    showTurns();
}

function lightUp(btn) {
    document.getElementById(btn).classList.add("light");
    setTimeout(() => {
        document.getElementById(btn).classList.remove("light");
    }, 400)
}

function showTurns() {
    game.turnInProcess = true;
    game.turn = 0;
    let turns = setInterval(() => {
        lightUp(game.currentGame[game.turn]);
        game.turn++;
        if (game.turn >= game.currentGame.length) {
            clearInterval(turns);
            game.turnInProcess = false;
        }
    }, 800);
}

function playersTurn() {
    let x = game.userMoves.length - 1;
    if (game.currentGame[x] === game.userMoves[x]) {
        if (game.currentGame.length == game.userMoves.length) {
            game.score++;
            displayScore();
            addTurn();
        }
    } else {
        $('#incorrect-modal').modal('show')
    }
}

function displayScore(){
    document.getElementById("score").innerText = game.score;
    checkScore();
}

function checkScore() {
    if (game.score === game.max_score) {
        $('#success-modal').modal('show')
    }
}

module.exports = {game, beginGame, displayScore, addTurn, lightUp, showTurns, playersTurn, btn_diff};