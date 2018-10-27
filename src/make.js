const make = function (...args) {
    const convertToSimpleArray = (array) => {
        let res = [];
        for (let i = 0; i < array.length; i++) {
            if (!Array.isArray(array[i])) {
                res.push(array[i]);
            } else {
                res = res.concat(convertToSimpleArray(array[i]));
            }
        }
        return res;
    };

    let store = convertToSimpleArray(args);
    function f(...arg) {
        if (typeof arg[0] === "function") {
            return store.reduce((res, el) => arg[0](res, el), 0);
        }
        store = store.concat(convertToSimpleArray([...arg]));
        return f;
    }
    return f;
};

module.exports = make;
