function digPow(n, p) {
    let str = n.toString()
    let arr = str.split('')
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.pow(arr[i], p))
        p++
    }
    let sum = result.reduce((a, b) => a + b, 0);
    if (sum % n === 0) {
        return sum / n
    } else {
        return -1
    }
}
console.log(digPow(695, 2)) //2
console.log(digPow(92, 1)) //-1
console.log(digPow(46288, 3))//51