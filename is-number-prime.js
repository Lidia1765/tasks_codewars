function isPrime(num) {
    //TODO
    let result = [1, num];
    for (let i = 2; i <= Math.pow(num, 0.5); i++) {
        if (num % i == 0) {
            result.push(i);
            result.push(num / i);
        }
    }
    result.sort((a, b) => a - b)
    console.log(result)
    if (num <= 1 || result.length > 2) {
        return false
    }
    return true
}
console.log(isPrime(5))