function cake(x, y) {
    let arr = y.split('')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charCodeAt(0)
    }
    let res = arr.reduce((a, b) => a + b, 0)
    let percent = x / 100 * 70
    if (res > percent) {
        return "Fire!"
    }
    return "That was close!"
}
console.log(cake(900, 'abcdef'))//"That was close!"