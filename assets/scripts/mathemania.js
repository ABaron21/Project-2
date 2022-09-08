let game = {
    gameType: "",
    difficulty: "",
    operand1: 0,
    operand2: 0,
    correct: 0,
    incorrect: 0
}

function diff_setter(mode){
    if(mode == "easy"){
        game.difficulty = "easy";
        game.operand1 = Math.floor(Math.random() * 25) + 1;
        game.operand2 = Math.floor(Math.random() * 25) + 1;
    } else if(mode == "medium"){
        game.difficulty = "medium";
        game.operand1 = Math.floor(Math.random() * 50) + 1;
        game.operand2 = Math.floor(Math.random() * 50) + 1;
    } else if (mode == "hard"){
        game.difficulty = "hard";
        game.operand1 = Math.floor(Math.random() * 100) + 1;
        game.operand2 = Math.floor(Math.random() * 100) + 1;
    }
}

function calculator(type, num1, num2){
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

module.exports = {calculator, game, diff_setter};