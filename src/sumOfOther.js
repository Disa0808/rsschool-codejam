const sumOfOther = function sumOfOther(arr) {
    if (arr && Array.isArray(arr)) {
        const sumArr = arr.reduce((sum, el) => {
            const s = sum + el;
            return s;
        }, 0);
        return arr.map((el) => {
            const a = sumArr - el;
            return a;
        });
    }
    return "Function allow array type parameters";
};

module.exports = sumOfOther;
