const sumOfOthers = require("./src/sumOfOther");
const make = require("./src/make");
const recursion = require("./src/recursion");
const assert = require("assert");

describe("Tests:", () => {
    describe("sumOfOther function:", () => {
        it("Simple array", () => {
            assert.equal(sumOfOthers([1, 2, 3, 1000, 1, 2, 3, 1000]).join(), "2011,2010,2009,1012,2011,2010,2009,1012");
        });
        it("Simple array2", () => {
            assert.equal(sumOfOthers([1, 2, 3]).join(), "5,4,3");
        });
        it("Array of zeros", () => {
            assert.equal(sumOfOthers([0, 0, 0, 0]).join(), "0,0,0,0");
        });
        it("Empty array", () => {
            assert.equal(sumOfOthers([]).join(), []);
        });
        it("Without arguments", () => {
            assert.equal(sumOfOthers(), "Function allow array type parameters");
        });
    });

    describe("make function:", () => {
        function sum(a, b) {
            return a + b;
        }
        function multiply(a, b) {
            return a * b;
        }
        function mod(a, b) {
            return a % b;
        }
        it("Sum of 5 numbers", () => {
            assert.equal(make(1)(1)(2)(100)(1)(sum), 105);
        });
        it("Sum of numbers and arrays", () => {
            assert.equal(make(1)(1)(2)([1, 2, 3, 1000])(1)(sum), 1011);
        });
        it("Sum of numbers and arrays with nested arrays", () => {
            assert.equal(make(1)(1)(2)([1, 2, 3, 1000, [1, 100, [33, 22, [1]]]])(1)(sum), 1168);
        });
        it("Sum of numbers and arrays in one call", () => {
            assert.equal(make(200, [1, 2, 3, 1000, [1, 100, [33, 22, [1]]]])(sum), 1363);
        });
        it("Sum without adding numbers", () => {
            assert.equal(make(sum), "Please add some numbers and then add type operation");
        });
        it("Sum without adding numbers1", () => {
            assert.equal(make()()(sum), "Please add some numbers and then add type operation");
        });
        it("Multiply function: 100 * 7 * 2 * 3 = 4200", () => {
            assert.equal(make(100)(7)(2)(3)(multiply), 4200);
        });
        it("Mod function: 100 mod 7 = 2", () => {
            assert.equal(make(100)(7)(mod), 2);
        });
    });

    describe("recursion function:", () => {
        const tree = { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } };
        const treeHard = { value: 100, left: { value: 90, left: { value: 70, left: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } } }, right: { value: 99 } }, right: { value: 120, left: { value: 110, left: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } } }, right: { value: 130, left: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } }, right: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130, left: { value: 1, left: { value: 2, right: { value: 100, left: { value: 90, left: { value: 70, left: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } } }, right: { value: 99 } }, right: { value: 120, left: { value: 110, left: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } } }, right: { value: 130, left: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } }, right: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130, left: { value: 1, left: { value: 2 } } } } } } } } } } } } } } } };
        it("Simple tree", () => {
            assert.equal(JSON.stringify(recursion(tree)), "[[100],[90,120],[70,99,110,130]]");
        });
        it("Hard tree", () => {
            assert.equal(JSON.stringify(recursion(treeHard)), "[[100],[90,120],[70,99,110,130],[100,100,100,100],[90,120,90,120,90,120,90,120],[70,99,110,130,70,99,110,130,70,99,110,130,70,99,110,130],[1],[2],[100],[90,120],[70,99,110,130],[100,100,100,100],[90,120,90,120,90,120,90,120],[70,99,110,130,70,99,110,130,70,99,110,130,70,99,110,130],[1],[2]]");
        });
        it("Only root element", () => {
            assert.equal(JSON.stringify(recursion({ value: 100 })), "[[100]]");
        });
    });
});
