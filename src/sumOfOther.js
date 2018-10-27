const sumOfOther = function sumOfOther(arr){
  const sumArr = arr.reduce((sum, el) => sum+=el, 0);
  return arr.map((el) => sumArr - el);
}

module.exports = sumOfOther;