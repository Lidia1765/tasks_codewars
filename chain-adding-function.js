function add(n) {
    // Let the currying begin!
    const sum = function (x) {
        return add(n + x)
    }
    sum.valueOf = function () {
        return n
    }
    return sum
}