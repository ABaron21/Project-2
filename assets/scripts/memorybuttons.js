let game = {
    score: 0,
    currentGame: "",
    userMoves: [],
    userChoices: ["button1", "button2", "button3", "button4", "button5", "button6"],
    turn: 0
}

function beginGame(){
    game.score = 0;
    game.currentGame = [];
    game.userMoves = [];
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
    game.turn = 0;
    let turns = setInterval(() => {
        lightUp(game.currentGame[game.turn]);
        game.turn++;
        if (game.turn >= game.currentGame.length) {
            clearInterval(turns);
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
        alert("Incorrect Button!");
        beginGame();
    }
}

function displayScore(){
    document.getElementById("score").innerText = game.score;
}

module.exports = {game, beginGame, displayScore, addTurn, lightUp, showTurns, playersTurn};