const sumOfOthers = require("./src/sumOfOther");
const make = require("./src/make");
const recursion = require("./src/recursion");

console.log(sumOfOthers([1, 2, 3]));
function sum(a, b) {
    return a + b;
}
console.log(make(1,2,3,[15,20,[2,2]])(sum));


const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

const array = recursion(tree);
console.log(array);
