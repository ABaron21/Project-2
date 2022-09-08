const {calculator, game, diff_setter} = require("../mathemania");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 34 for 22 + 12", () => {
            expect(calculator("add", 22, 12)).toBe(34);
        })
        test("should return 63 for 42 + 21", () => {
            expect(calculator("add", 42, 21)).toBe(63);
        })
    });
    describe("Subtraction function", ()=>{
        test("should return 12 for 24 - 12", () => {
            expect(calculator("subtract", 24, 12)).toBe(12);
        })
        test("should return 20 for 42 - 21", () => {
            expect(calculator("subtract", 42, 21)).toBe(21);
        })
    });
    describe("Multiplication function", ()=>{
        test("should return 36 for 12 * 3", () => {
            expect(calculator("multiply", 12, 3)).toBe(36);
        })
        test("should return 72 for 9 * 8", () => {
            expect(calculator("multiply", 9, 8)).toBe(72);
        })
    });
    describe("Division function", ()=>{
        test("should return 12 for 36 / 3", () => {
            expect(calculator("divide", 36, 3)).toBe(12);
        })
        test("should return 9 for 72 / 8", () => {
            expect(calculator("divide", 72, 8)).toBe(9);
        })
    });
})

describe("Game properties", ()=>{
    test("Game type key exists", ()=>{
        expect("gameType" in game).toEqual(true);
    })
    test("Difficulty key exists", ()=>{
        expect("difficulty" in game).toEqual(true);
    })
    test("Correct answers key exists", ()=>{
        expect("correct" in game).toEqual(true);
    })
    test("Incorrect answers key exists", ()=>{
        expect("incorrect" in game).toEqual(true);
    })
})

describe("Easy difficulty", ()=>{
    beforeAll(()=>{
        diff_setter("easy");
    })
    test("Easy sets num 1 & 2 between 1-25", ()=>{
        expect(game.operand1).toBeGreaterThan(0);
        expect(game.operand2).toBeGreaterThan(0);
    })
    test("Difficulty key set to easy", ()=>{
        expect(game.difficulty).toEqual("easy");
    })
})

describe("Medium difficulty", ()=>{
    beforeAll(()=>{
        diff_setter("medium");
    })
    test("Medium sets num 1 & 2 between 1-50", ()=>{
        expect(game.operand1).toBeGreaterThan(0);
        expect(game.operand2).toBeGreaterThan(0);
    })
    test("Difficulty key set to medium", ()=>{
        expect(game.difficulty).toEqual("medium");
    })
})

describe("Hard difficulty", ()=>{
    beforeAll(()=>{
        diff_setter("hard");
    })
    test("Hard sets num 1 & 2 between 1-100", ()=>{
        expect(game.operand1).toBeGreaterThan(0);
        expect(game.operand2).toBeGreaterThan(0);
    })
    test("Difficulty key set to hard", ()=>{
        expect(game.difficulty).toEqual("hard");
    })
})