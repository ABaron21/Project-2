document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                game(gameType);
            }
        });
    }

    game("add");
});

let currentGame = {
    gameType: "",
    difficulty: "",
    factor1: 0,
    factor2: 0,
}

function diff_setter(mode){
    if(mode == "easy"){
        currentGame.difficulty = "easy";
        currentGame.factor1 = 25;
        currentGame.factor2 = 25;
    } else if(mode == "medium"){
        currentGame.difficulty = "medium";
        currentGame.factor1 = 50;
        currentGame.factor2 = 50;
    } else if (mode == "hard"){
        currentGame.difficulty = "hard";
        currentGame.factor1 = 100;
        currentGame.factor2 = 100;
    }
}


function game(mode){
    currentGame.gameType = mode;
    let num1 = Math.floor(Math.random() * currentGame.factor1) + 1;
    let num2 = Math.floor(Math.random() * currentGame.factor2) + 1;

    if(mode === "add"){
        displayAddition(num1, num2);
    }else if(mode === "multiply"){
        displayMultiplication(num1, num2);
    }else if(mode === "subtract"){
        displaySubtraction(num1, num2);
    }
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect){
        incrementScore();
    }else{
        incrementWrongAnswer();
    }
    game(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === "+"){
        return [operand1 + operand2, "add"]
    }else if(operator === "x"){
        return [operand1 * operand2, "multiply"]
    }else if(operator === "-"){
        return [operand1 - operand2, "subtract"]
    }
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAddition(operand1, operand2){
    document.getElementById('operand1').innerHTML = operand1;
    document.getElementById('operand2').innerHTML = operand2;
    document.getElementById('operator').innerHTML = "+";
}
function displaySubtraction(operand1, operand2){
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').innerHTML = "-";
}
function displayMultiplication(operand1, operand2){
    document.getElementById('operand1').innerHTML = operand1;
    document.getElementById('operand2').innerHTML = operand2;
    document.getElementById('operator').innerHTML = "x";
}

module.exports = {calculator, currentGame, diff_setter, game};