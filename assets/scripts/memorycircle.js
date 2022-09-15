let game = {
    score: 0,
    currentGame: [],
    moves: [],
    choices: ["circle1", "circle2", "circle3", "circle4"]
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

function lightUp(circ){
    document.getElementById(circ).classList.add("light");
    setTimeout((()=>{
        document.getElementById(circ).classList.remove("light");
    }, 400))
}

function showScore(){
    document.getElementById("score").innerText = game.score;
}

module.exports = {game, newGame, showScore, addTurn, lightUp};