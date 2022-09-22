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
    diff_setter("easy");
    document.getElementById('answer-box').addEventListener("keydown", function(event) {
        if(event.key === "Enter"){
            checkAnswer();
        }
    })
    game("add");
});

let currentGame = {
    difficulty: "",
    factor1: 0,
    factor2: 0,
}

function diff_setter(mode){
    if(mode == "easy"){
        currentGame.difficulty = "easy";
        resetScores();
        currentGame.factor1 = 25;
        currentGame.factor2 = 25;
        document.getElementById("easy-btn").classList.add("btn--active");
        document.getElementById("medium-btn").classList.remove("btn--active");
        document.getElementById("hard-btn").classList.remove("btn--active");
    } else if(mode == "medium"){
        currentGame.difficulty = "medium";
        resetScores();
        currentGame.factor1 = 50;
        currentGame.factor2 = 50;
        document.getElementById("easy-btn").classList.remove("btn--active");
        document.getElementById("medium-btn").classList.add("btn--active");
        document.getElementById("hard-btn").classList.remove("btn--active");
    } else if (mode == "hard"){
        currentGame.difficulty = "hard";
        resetScores();
        currentGame.factor1 = 100;
        currentGame.factor2 = 100;
        document.getElementById("easy-btn").classList.remove("btn--active");
        document.getElementById("medium-btn").classList.remove("btn--active");
        document.getElementById("hard-btn").classList.add("btn--active");
    }
}


function game(mode){
    document.getElementById('answer-box').value = "";
    document.getElementById('answer-box').focus();
    let num1 = Math.floor(Math.random() * currentGame.factor1) + 1;
    let num2 = Math.floor(Math.random() * currentGame.factor2) + 1;

    if(mode === "add"){
        displayAddition(num1, num2);
    }else if(mode === "multiply"){
        displayMultiplication(num1, num2);
    }else if(mode === "subtract"){
        displaySubtraction(num1, num2);
    }else if(mode === "divide"){
        displayDivision(num1,num2);
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
    }else if(operator === "/"){
        return [operand1/operand2, "divide"]
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

function resetScores(){
    let oldCorrect = parseInt(document.getElementById('correct').innerText);
    oldCorrect = 0;
    document.getElementById('correct').innerText = oldCorrect;
    let oldIncorrect = parseInt(document.getElementById('incorrect').innerText);
    oldIncorrect = 0;
    document.getElementById('incorrect').innerText = oldIncorrect;
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

function displayDivision(operand1, operand2){
    let numOne = operand1 > operand2 ? operand1 : operand2;
	let numTwo = operand1 > operand2 ? operand2 : operand1;
	if(numOne % numTwo === 0){
	    document.getElementById("operand1").textContent = numOne;
	    document.getElementById("operand2").textContent = numTwo;
	    document.getElementById("operator").textContent = "/";
	}else{
	    game("divide");
	}
}

module.exports = {currentGame, game, diff_setter}