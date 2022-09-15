/**
* @jest-environment jsdom
*/

const {game, newGame, showScore, addTurn, lightUp} = require("../memorycircle");

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
    test("choices contains ids", ()=>{
        expect(game.choices).toEqual(["circle1", "circle2", "circle3", "circle4"]);
    })
})

describe("newGame functions as expected", () =>{
    beforeAll(()=>{
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
})