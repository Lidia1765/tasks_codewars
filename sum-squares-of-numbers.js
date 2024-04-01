function SumSquares(l) {
    let arr = l.flat(Infinity)
    console.log(arr)
    let newArr = []
    newArr = arr.map((num) => num * num)
    return newArr.reduce((a, b) => a + b)
}
console.log(SumSquares([[1, 2], 3]))