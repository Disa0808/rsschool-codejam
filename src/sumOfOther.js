const sumOfOther = function sumOfOther(arr) {
    const sumArr = arr.reduce((sum, el) => {
        const s = sum + el;
        return s;
    }, 0);
    return arr.map((el) => {
        const a = sumArr - el;
        return a;
    });
};

module.exports = sumOfOther;
