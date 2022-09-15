// /**
// * @jest-environment jsdom
// */
// const {calculator, game, diff_setter, currentGame} = require("../mathemania");

// beforeEach(()=>{
//     document.body.innerHTML = "<span id='operand1'>0</span><span id='operator'>x</span><span id='operand2'>0</span>";
// })

// describe("Calculator", () => {
//     describe("Addition function", () => {
//         test("should return 34 for 22 + 12", () => {
//             expect(calculator("add", 22, 12)).toBe(34);
//         })
//         test("should return 63 for 42 + 21", () => {
//             expect(calculator("add", 42, 21)).toBe(63);
//         })
//     });
//     describe("Subtraction function", ()=>{
//         test("should return 12 for 24 - 12", () => {
//             expect(calculator("subtract", 24, 12)).toBe(12);
//         })
//         test("should return 20 for 42 - 21", () => {
//             expect(calculator("subtract", 42, 21)).toBe(21);
//         })
//     });
//     describe("Multiplication function", ()=>{
//         test("should return 36 for 12 * 3", () => {
//             expect(calculator("multiply", 12, 3)).toBe(36);
//         })
//         test("should return 72 for 9 * 8", () => {
//             expect(calculator("multiply", 9, 8)).toBe(72);
//         })
//     });
//     describe("Division function", ()=>{
//         test("should return 12 for 36 / 3", () => {
//             expect(calculator("divide", 36, 3)).toBe(12);
//         })
//         test("should return 9 for 72 / 8", () => {
//             expect(calculator("divide", 72, 8)).toBe(9);
//         })
//     });
// })

// describe("Game properties", ()=>{
//     test("Game type key exists", ()=>{
//         expect("gameType" in currentGame).toEqual(true);
//     })
//     test("Difficulty key exists", ()=>{
//         expect("difficulty" in currentGame).toEqual(true);
//     })
//     test("Correct answers key exists", ()=>{
//         expect("correct" in currentGame).toEqual(true);
//     })
//     test("Incorrect answers key exists", ()=>{
//         expect("incorrect" in currentGame).toEqual(true);
//     })
// })

// describe("Easy difficulty", ()=>{
//     beforeAll(()=>{
//         diff_setter("easy");
//     })
//     test("Easy sets factor 1 & 2 to 25", ()=>{
//         expect(currentGame.factor1).toBe(25);
//         expect(currentGame.factor2).toBe(25);
//     })
//     test("Difficulty key set to easy", ()=>{
//         expect(currentGame.difficulty).toEqual("easy");
//     })
// })

// describe("Medium difficulty", ()=>{
//     beforeAll(()=>{
//         diff_setter("medium");
//     })
//     test("Medium sets factor 1 & 2 to 50", ()=>{
//         expect(currentGame.factor1).toBe(50);
//         expect(currentGame.factor2).toBe(50);
//     })
//     test("Difficulty key set to medium", ()=>{
//         expect(currentGame.difficulty).toEqual("medium");
//     })
// })

// describe("Hard difficulty", ()=>{
//     beforeAll(()=>{
//         diff_setter("hard");
//     })
//     test("Hard sets factor 1 & 2 to 100", ()=>{
//         expect(currentGame.factor1).toBe(100);
//         expect(currentGame.factor2).toBe(100);
//     })
//     test("Difficulty key set to hard", ()=>{
//         expect(currentGame.difficulty).toEqual("hard");
//     })
// })

// describe("Setting game", ()=>{
//     beforeAll(()=>{
//         diff_setter("easy");
//     })
//     describe("Adding values to operand 1 & 2", ()=>{
//         test("operand 1 & 2 aren't null", ()=>{
//             game();
//             expect(currentGame.operand1).toBeGreaterThan(0);
//             expect(currentGame.operand2).toBeGreaterThan(0);
//         })
//     })
//     describe("Setting the correct operator for the game type", ()=>{
//         test("Game type to be 'add'", ()=>{
//             game("add");
//             expect(currentGame.gameType).toBe("add");
//         })
//     })
// })

// describe("Displaying components in the DOM", ()=>{
//     test("expects question spans to change", () =>{
//         game("easy");
//         expect(document.getElementById("operand1").innerHTML).toBeGreaterThan("0");
//         expect(document.getElementById("operand2").innerHTML).toBeGreaterThan("0");
//         expect(document.getElementById("operator").innerHTML).toEqual("+");
//     })
// })