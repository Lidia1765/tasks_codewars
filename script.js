function arrayDiff(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            result.push(arr1[i])
        }
    }
    return result
}
console.log(arrayDiff([1, 2, 2], [1])) // [2, 2]
console.log(arrayDiff([7, 13, 14, -2, 11, -6, -13, 14, -3], [7, 13])) //[1,3,4,5,6,7]