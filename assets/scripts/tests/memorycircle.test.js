/**
* @jest-environment jsdom
*/

const {game, newGame, showScore, addTurn, lightUp, displayTurns, userTurn, diff_setter} = require("../memorycircle");

jest.spyOn(window, "alert").mockImplementation(()=>{ });

beforeAll(()=>{
    let fs = require("fs");
    let fileContents = fs.readFileSync("memorycircle.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("game object contains keys", ()=>{
    test("score key exists", ()=>{
        expect("score" in game).toBe(true);
    })
    test("current game key exists", ()=>{
        expect("currentGame" in game).toBe(true);
    })
    test("moves key exists", ()=>{
        expect("moves" in game).toBe(true);
    })
    test("choices key exists", ()=>{
        expect("choices" in game).toBe(true);
    })
    test("turnsProcessing key exists", ()=>{
        expect("turnsProcessing" in game).toBe(true);
    })
    test("previousCircle key exists", ()=>{
        expect("previousCircle" in game).toBe(true);
    })
    test("choices contains ids", ()=>{
        expect(game.choices).toEqual(["circle1", "circle2", "circle3", "circle4"]);
    })
})

describe("newGame functions as expected", () =>{
    beforeEach(()=>{
        game.score = 23;
        game.currentGame = ["button1", "button2"];
        game.moves = ["button1", "button2"];
        newGame();
    })
    test("score should be 0", ()=>{
        expect(game.score).toEqual(0);
    })
    test("should be 1 in the currentGame array", ()=>{
        expect(game.currentGame.length).toEqual(1);
    })
    test("moves array should be empty", ()=>{
        expect(game.moves.length).toEqual(0);
    })
    test("should set and display the current score", () =>{
        expect(document.getElementById("score").innerText).toEqual(0);
    })
    test("data-listener should be true", ()=>{
        const elements = document.getElementsByClassName("circle");
        for (let element of elements){
            expect(element.getAttribute("data-listener")).toEqual("true");
        }
    })
})

describe("game works correctly", () =>{
    beforeEach(()=>{
        game.score = 0;
        game.currentGame = [];
        game.moves = [];
        addTurn();
    })
    afterEach(()=>{
        game.score = 0;
        game.currentGame = [];
        game.moves =[];
    })
    test("addTurn should add to the currentGame array", ()=>{
        addTurn();
        expect(game.currentGame.length).toBe(2);
    })
    test("should add the class to light up each button", ()=>{
        let button = document.getElementById(game.currentGame[0]);
        lightUp(game.currentGame[0]);
        expect(button.classList).toContain("light");
    })
    test("displayTurns should set game.turn to 0", ()=>{
        game.turn = 13;
        displayTurns();
        expect(game.turn).toBe(0);
    })
    test("should increase the score if a turn is correct", ()=>{
        game.moves.push(game.currentGame[0]);
        userTurn();
        expect(game.score).toBe(1);
    })
    test("should display an error message if a user clicks a wrong circle", ()=>{
        game.moves.push("wrong");
        userTurn();
        expect(window.alert).toBeCalledWith("Incorrect Move!");
    })
    test("turnsProcessing should be set to true", ()=>{
        displayTurns();
        expect(game.turnsProcessing).toEqual(true);
    })
    test("shouldn't be able to click during the turns being displayed", ()=>{
        displayTurns();
        game.previousCircle = "";
        document.getElementById("circle2").click();
        expect(game.previousCircle).toEqual("");
    })
    test("game should finish when max score reached and message displayed for user", ()=>{
        diff_setter("easy");
        game.score = 10;
        showScore();
        expect(window.alert).toBeCalledWith("Congratulations! You've beat the game!");
    })
})

describe("difficulty buttons work correctly", ()=>{
    test("Easy button sets max score to 10", ()=>{
        diff_setter("easy");
        expect(game.max_score).toBe(10);
    })
    test("Medium button sets max score to 20", ()=>{
        diff_setter("medium");
        expect(game.max_score).toBe(20);
    })
    test("Hard button sets max score to 30", ()=>{
        diff_setter("hard");
        expect(game.max_score).toBe(30);
    })
})