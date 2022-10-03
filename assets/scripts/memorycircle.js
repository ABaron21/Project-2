document.addEventListener("DOMContentLoaded", function () {
    circle_diff("easy");
});

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

/*
*   Sets the score to reach based on the difficulty selected and shows indication of which difficulty is selected.
*/

function circle_diff(diff) {
    switch (diff) {
        case "easy":
            game.max_score = 10;
            document.getElementById("easy-btn").classList.add("btn--active");
            document.getElementById("medium-btn").classList.remove("btn--active");
            document.getElementById("hard-btn").classList.remove("btn--active");
            break
        case "medium":
            game.max_score = 20;
            document.getElementById("easy-btn").classList.remove("btn--active");
            document.getElementById("medium-btn").classList.add("btn--active");
            document.getElementById("hard-btn").classList.remove("btn--active");
            break
        case "hard":
            game.max_score = 30;
            document.getElementById("easy-btn").classList.remove("btn--active");
            document.getElementById("medium-btn").classList.remove("btn--active");
            document.getElementById("hard-btn").classList.add("btn--active");
            break
        default:
            return "No difficulty selected";
    }
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.moves = [];
    // Adds event listeners to each circle allowing users to click on them.
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnsProcessing) {
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

function addTurn() {
    game.moves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    displayTurns();
}

function lightUp(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400)
}

/*
*   Signals the game that turns are being shown so it will disable the users ability to click while they're being shown.
*   Calls the light up function with the id of the circles in the order that has been randomly chosen which will light up that circle.
*/

function displayTurns() {
    game.turnsProcessing = true;
    game.turn = 0;
    let turns = setInterval(() => {
        lightUp(game.currentGame[game.turn]);
        game.turn++;
        if (game.turn >= game.currentGame.length) {
            clearInterval(turns);
            game.turnsProcessing = false;
        }
    }, 800);
}

function userTurn() {
    let x = game.moves.length - 1;
    if (game.currentGame[x] === game.moves[x]) {
        if (game.currentGame.length == game.moves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    } else {
        $('#incorrect-modal').modal('show');
    }
}

function showScore() {
    document.getElementById("score").innerText = game.score;
    checkScore();
}

function checkScore() {
    if (game.score === game.max_score) {
        $('#success-modal').modal('show');
    }
}

module.exports = {
    game,
    newGame,
    showScore,
    addTurn,
    lightUp,
    displayTurns,
    userTurn,
    circle_diff
};