function detectInt(...arg) {
    // your code here
    for (let i = 1; ; i++) {
        if (arg.every(x => x(i))) return i
    }
}
console.log(detectInt((x) => x % 5 == 0, (x) => x % 3 == 0))