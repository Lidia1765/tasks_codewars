function rowWeights(array) {
    let sum1 = array.filter((a, b) => b % 2 === 0).reduce((a, b) => a + b, 0);
    let sum2 = array.filter((a, b) => b % 2 !== 0).reduce((a, b) => a + b, 0)
    return [sum1, sum2]
}
console.log(rowWeights([13, 27, 49]))// [62,27]