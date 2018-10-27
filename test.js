const sumOfOthers = require("./src/sumOfOther");
const make = require("./src/make");

console.log(sumOfOthers([1,2,3]));
function sum(a,b){
  return a + b;
}
console.log(make(1,2,3,[15,20,[2,2]])(sum));