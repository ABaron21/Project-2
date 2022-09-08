const {addition, subtraction, multiply, division} = require("../mathemania");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 34 for 22 + 12", () => {
            expect(addition(22, 12)).toBe(34);
        })
        test("should return 63 for 42 + 21", () => {
            expect(addition(42, 21)).toBe(63);
        })
    });
    describe("Subtraction function", ()=>{
        test("should return 12 for 24 - 12", () => {
            expect(subtraction(24, 12)).toBe(12);
        })
        test("should return 20 for 42 - 21", () => {
            expect(subtraction(42, 21)).toBe(21);
        })
    });
    describe("Multiplication function", ()=>{
        test("should return 36 for 12 * 3", () => {
            expect(multiply(12, 3)).toBe(36);
        })
        test("should return 72 for 9 * 8", () => {
            expect(multiply(9, 8)).toBe(72);
        })
    });
    describe("Division function", ()=>{
        test("should return 12 for 36 / 3", () => {
            expect(division(36, 3)).toBe(12);
        })
        test("should return 9 for 72 / 8", () => {
            expect(division(72, 8)).toBe(9);
        })
    });
})