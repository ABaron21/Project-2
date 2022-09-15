let game = {
    score: 0,
    turn: 0,
    currentGame: [],
    moves: [],
    choices: ["circle1", "circle2", "circle3", "circle4"]
}

function newGame(){
    game.score = 0;
    game.currentGame = [];
    game.moves = [];
    for(let circle of document.getElementsByClassName("circle")){
        if(circle.getAttribute("data-listener") !== "true"){
            circle.addEventListener("click", (e)=>{
                let move = e.target.getAttribute("id");
                lightUp(move);
                game.moves.push(move);
                userTurn();
            })
            circle.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
}

function addTurn(){
    game.moves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    displayTurns();
}

function lightUp(circ){
    document.getElementById(circ).classList.add("light");
    setTimeout((()=>{
        document.getElementById(circ).classList.remove("light");
    }, 400))
}

function displayTurns(){
    game.turn = 0;
    let turns = setInterval(()=>{
        lightUp(game.currentGame[game.turn]);
        game.turn++;
        if(game.turn >= game.currentGame.length){
            clearInterval(turns);
        }
    }, 600);
}

function userTurn(){
    let x = game.moves.length -1;
    if(game.currentGame[x] === game.moves[x]){
        if(game.currentGame.length == game.moves.length){
            game.score++;
            showScore();
            addTurn();
        }
    } else{
        alert("Incorrect Move!");
        newGame();
    }
}

function showScore(){
    document.getElementById("score").innerText = game.score;
}

module.exports = {game, newGame, showScore, addTurn, lightUp, displayTurns, userTurn};