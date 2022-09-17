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

const {game} = require("../memorybuttons");

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
        newGame();
    })
    test("score should be 0", ()=>{
        expect(game.score).toEqual(0);
    })
    test("should empty the currentGame array", ()=>{
        expect(game.currentGame.length).toEqual(0);
    })
    test("user moves array should be empty", ()=>{
        expect(game.moves.length).toEqual(0);
    })
    test("should set and display the current score", () =>{
        expect(document.getElementById("score").innerText).toEqual(0);
    })
})