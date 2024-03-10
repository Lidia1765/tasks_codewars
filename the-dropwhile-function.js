function dropWhile(array) {
    return function (condintion) {
        if (condintion === 'isEven') {
            return array.reduce(x => x % 2 === 0)
        }
        if (condintion === 'isOdd') {
            return array.reduce(x => x % 2 !== 0)
        }
    }
}
console.log(dropWhile([2, 4, 8])('isEven'))