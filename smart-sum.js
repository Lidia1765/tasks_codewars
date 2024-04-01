function smartSum(a) {
    return [...arguments].flat(Infinity).reduce((a, c) => a + c)
}
console.log(smartSum(1, 2, [[3, 4], 5], 6))