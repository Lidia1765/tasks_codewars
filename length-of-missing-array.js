function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays !== null && arrayOfArrays !== undefined) {
        let newArr = [];
        for (let i = 0; i < arrayOfArrays.length; i++) {
            if (arrayOfArrays[i].length !== 0) {
                newArr.push(arrayOfArrays[i].length)
            }
        }
        newArr.sort(function (a, b) { return a - b })
        for (let i = 0; i < newArr.length; i++) {
            if ((newArr[i] + 1 !== newArr[i + 1]) && newArr.length !== 1) {
                return newArr[i] + 1
            }
        }
    }
    return 0

}
console.log(getLengthOfMissingArray([[],
[4],
[0, 4, 0],
[0, 2, 2, 4],
[4, 2, 4, 3, 0],
[2, 0, 2, 4, 4, 1],
[1, 0, 0, 3, 1, 4, 4],
[1, 4, 0, 2, 1, 4, 1, 1],
[0, 0, 4, 0, 3, 1, 4, 4, 1]])) //2
console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])) //3