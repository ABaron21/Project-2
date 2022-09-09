let currentGame = {
    gameType: "",
    difficulty: "",
    factor1: 0,
    operand1: 0,
    factor2: 0,
    operand2: 0,
    correct: 0,
    incorrect: 0
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

function calculator(type,num1,num2){
    switch (type){
        case "add":
            return num1 + num2;
            break;
        case "subtract":
            return num1 - num2;
            break;
        case "multiply":
            return num1 * num2;
            break;
        case "divide":
            return num1 / num2;
            break;
        default:
            return "No game type selected";
    }
}

function game(mode){
    currentGame.gameType = mode;
    currentGame.operand1 = Math.floor(Math.random() * currentGame.factor1) + 1;
    currentGame.operand2 = Math.floor(Math.random() * currentGame.factor2) + 1;
}

module.exports = {calculator, currentGame, diff_setter, game};