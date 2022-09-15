/**
* @jest-environment jsdom
*/

const {game, newGame} = require("../memorycircle");

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
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    })
})

describe("newGame functions as expected", () =>{
    beforeAll(()=>{
        game.score = 23;
        game.currentGame = ["button1", "button2"];
        game.moves = ["button1", "button2"];
        newGame();
    })
    test("score to be 0", ()=>{
        expect(game.score).toEqual(0);
    })
    test("currentGame array to be empty", ()=>{
        expect(game.currentGame.length).toEqual(0);
    })
    test("moves array to be empty", ()=>{
        expect(game.moves.length).toEqual(0);
    })
    test("should set and display the current score", () =>{
        expect(document.getElementById("score").innerHTML).toEqual(0);
    })
})