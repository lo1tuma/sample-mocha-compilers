module.exports = function foo(maybeObj, key) {
    if (typeof maybeObj === 'object') {
        return maybeObj[key];
    }

    return maybeObj;
};
