function positiveSum(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            num = num + arr[i]
        }

    }
    return num

}
console.log(positiveSum([1, 2, 3, 4, 5]))//15
console.log(positiveSum([-1, 2, 3, 4, -5]))//9
console.log(positiveSum([]))//0