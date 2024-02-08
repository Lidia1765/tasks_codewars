function min(arr, toReturn) {
    // TODO
    let min = arr[0]
    let minIndex = 0
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
            minIndex = i

        }
    }
    if (toReturn === 'value') {
        return min
    } if (toReturn === 'index') {
        return minIndex
    }
}
console.log(min([1, 2, 3, 4, 5], 'index'))//0
console.log(min([1, 2, 3, 4, 5], 'value'))//1