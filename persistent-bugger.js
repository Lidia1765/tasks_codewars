function persistence(num) {
    for (var i = 0; num > 9; i++) {
        num = num.toString().split('').reduce((a, b) => { return a * b });
    }
    return i;
}
console.log(persistence(999))