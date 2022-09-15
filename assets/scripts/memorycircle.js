let game = {
    score: 0,
    max_score: 0,
    turn: 0,
    currentGame: [],
    moves: [],
    choices: ["circle1", "circle2", "circle3", "circle4"],
    turnsProcessing: false,
    previousCircle: ""
}

function diff_setter(diff){
    switch(diff){
        case "easy":
            game.max_score = 10;
            break
        case "medium":
            game.max_score = 20;
            break
        case "hard":
            game.max_score = 30;
            break
        default:
            return "No difficulty selected";
    }
}

function newGame(){
    game.score = 0;
    game.currentGame = [];
    game.moves = [];
    for(let circle of document.getElementsByClassName("circle")){
        if(circle.getAttribute("data-listener") !== "true"){
            circle.addEventListener("click", (e)=>{
                if(game.currentGame.length > 0 && !game.turnsProcessing){
                    let move = e.target.getAttribute("id");
                    game.previousCircle = move;
                    lightUp(move);
                    game.moves.push(move);
                    userTurn();
                }
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
    setTimeout(()=>{
        document.getElementById(circ).classList.remove("light");
    }, 300)
}

function displayTurns(){
    game.turnsProcessing = true;
    game.turn = 0;
    let turns = setInterval(()=>{
        lightUp(game.currentGame[game.turn]);
        game.turn++;
        if(game.turn >= game.currentGame.length){
            clearInterval(turns);
            game.turnsProcessing = false;
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

module.exports = {game, newGame, showScore, addTurn, lightUp, displayTurns, userTurn, diff_setter};