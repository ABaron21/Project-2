/**
* @jest-environment jsdom
*/

beforeAll(()=>{
    let fs = require("fs");
    let fileContents = fs.readFileSync("memorybuttons.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

const {game, beginGame, displayScore, addTurn, lightUp, showTurns, playersTurn} = require("../memorybuttons");
jest.spyOn(window, "alert").mockImplementation(()=>{ });

describe("game object contains keys", ()=>{
    test("score key exists", ()=>{
        expect("score" in game).toBe(true);
    })
    test("current game key exists", ()=>{
        expect("currentGame" in game).toBe(true);
    })
    test("moves key exists", ()=>{
        expect("userMoves" in game).toBe(true);
    })
    test("choices key exists", ()=>{
        expect("userChoices" in game).toBe(true);
    })
    test("choices contains ids for each button", ()=>{
        expect(game.userChoices).toEqual(["button1", "button2", "button3", "button4", "button5", "button6"]);
    })
})

describe("beginGame functions as expected", () =>{
    beforeEach(()=>{
        game.score = 14;
        game.currentGame = ["button1", "button2"];
        game.moves = ["button1", "button2"];
        beginGame();
    })
    test("score should be 0", ()=>{
        expect(game.score).toEqual(0);
    })
    test("currentGame array should have 1 in", ()=>{
        expect(game.currentGame.length).toEqual(1);
    })
    test("user moves array should be empty", ()=>{
        expect(game.userMoves.length).toEqual(0);
    })
    test("should set and display the current score", () =>{
        expect(document.getElementById("score").innerText).toEqual(0);
    })
    test("data-listener should be true", ()=>{
        const elements = document.getElementsByClassName("btn--big");
        for (let element of elements){
            expect(element.getAttribute("data-listener")).toEqual("true");
        }
    })
})

describe("gameplay works correctly", () =>{
    beforeEach(()=>{
        game.score = 0;
        game.currentGame = [];
        game.userMoves = [];
        addTurn();
    })
    afterEach(()=>{
        game.score = 0;
        game.currentGame = [];
        game.userMoves =[];
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
    test("showTurns should set game.turn to 0", ()=>{
        game.turn = 13;
        showTurns();
        expect(game.turn).toBe(0);
    })
    test("score should increment if a turn is correct", ()=>{
        game.userMoves.push(game.currentGame[0]);
        playersTurn();
        expect(game.score).toBe(1);
    })
    test("should display an error message if a user clicks the wrong button", ()=>{
        game.userMoves.push("wrong");
        playersTurn();
        expect(window.alert).toBeCalledWith("Incorrect Button!");
    })
    test("turnsProcessing should be set to true", ()=>{
        showTurns();
        expect(game.turnsProcessing).toEqual(true);
    })
    test("shouldn't be able to click during the turns being displayed", ()=>{
        showTurns();
        game.previousButton = "";
        document.getElementById("button3").click();
        expect(game.previousButton).toEqual("");
    })
    test("game should finish when max score reached and message displayed for user", ()=>{
        btn_diff("easy");
        game.score = 15;
        displayScore();
        expect(window.alert).toBeCalledWith("Congratulations! You've beat the game!");
    })
})

describe("difficulty buttons work correctly", ()=>{
    test("Easy button sets max score to 15", ()=>{
        btn_diff("easy");
        expect(game.max_score).toBe(15);
    })
    test("Medium button sets max score to 30", ()=>{
        btn_diff("medium");
        expect(game.max_score).toBe(30);
    })
    test("Hard button sets max score to 45", ()=>{
        btn_diff("hard");
        expect(game.max_score).toBe(45);
    })
})