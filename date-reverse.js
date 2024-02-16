function dataReverse(data) {
    let arr = []
    for (let i = 0; i < data.length; i++) {
        let byte = data.splice(0, 8)
        arr.push(byte)
    }
    return arr.reverse().flat()
}
console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0]))//[0, 0, 0, 0, 0, 0,0, 0, 1, 1, 1, 1,1, 1, 1, 1]
// тесты не прошел