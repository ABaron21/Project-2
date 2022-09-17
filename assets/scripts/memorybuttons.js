let game = {
    score: 0,
    currentGame: "",
    userMoves: [],
    userChoices: ["button1", "button2", "button3", "button4", "button5", "button6"]
}

function beginGame(){
    game.score = 0;
    game.currentGame = [];
    game.userMoves = [];
    displayScore();
}

function displayScore(){
    document.getElementById("score").innerText = game.score;
}

module.exports = {game, beginGame, displayScore};