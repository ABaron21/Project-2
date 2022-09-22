/**
* @jest-environment jsdom
*/
const {game, diff_setter, currentGame} = require("../mathemania");

beforeAll(()=>{
    let fs = require("fs");
    let fileContents = fs.readFileSync("mathemania.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("currentGame object", () => {
    test("contains difficulty key", ()=>{
        expect("difficulty" in currentGame).toBe(true);
    })
    test("contains factor1 key", ()=>{
        expect("factor1" in currentGame).toBe(true);
    })
    test("contains factor2 key", ()=>{
        expect("factor2" in currentGame).toBe(true);
    })
})

describe("Easy difficulty", ()=>{
    beforeAll(()=>{
        diff_setter("easy");
    })
    test("Easy sets factor 1 & 2 to 25", ()=>{
        expect(currentGame.factor1).toBe(25);
        expect(currentGame.factor2).toBe(25);
    })
    test("Difficulty key set to easy", ()=>{
        expect(currentGame.difficulty).toEqual("easy");
    })
})

describe("Medium difficulty", ()=>{
    beforeAll(()=>{
        diff_setter("medium");
    })
    test("Medium sets factor 1 & 2 to 50", ()=>{
        expect(currentGame.factor1).toBe(50);
        expect(currentGame.factor2).toBe(50);
    })
    test("Difficulty key set to medium", ()=>{
        expect(currentGame.difficulty).toEqual("medium");
    })
})

describe("Hard difficulty", ()=>{
    beforeAll(()=>{
        diff_setter("hard");
    })
    test("Hard sets factor 1 & 2 to 100", ()=>{
        expect(currentGame.factor1).toBe(100);
        expect(currentGame.factor2).toBe(100);
    })
    test("Difficulty key set to hard", ()=>{
        expect(currentGame.difficulty).toEqual("hard");
    })
})

describe("Displaying components in the DOM", ()=>{
    test("expects question spans to change", () =>{
        diff_setter("easy");
        game("add");
        expect(document.getElementById("operand1").textContent).not.toBeNull();
        expect(document.getElementById("operand2").textContent).not.toBeNull();
        expect(document.getElementById("operator").textContent).toEqual("+");
    })
})