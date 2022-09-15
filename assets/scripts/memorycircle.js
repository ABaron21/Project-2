let game = {
    score: 0,
    currentGame: [],
    moves: [],
    choices: ["button1", "button2", "button3", "button4"]
}

function newGame(){
    game.score = 0;
    game.currentGame = [];
    game.moves = [];
    showScore();
    addTurn();
}

function addTurn(){
    game.moves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
}

function showScore(){
    document.getElementById("score").innerText = game.score;
}

module.exports = {game, newGame, showScore};