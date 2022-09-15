/**
* @jest-environment jsdom
*/

const {game} = require("../memorycircle");

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
})