function indexEqualsValue(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === i) {
            return i
        }
    }
    return -1

    /*let res = a.filter((value, index) => index === value)
    if (res.length !== 0) {
        res.length = 1
        return Number(res.join(''))
    }
    return -1*/
}
console.log(indexEqualsValue([-8, 0, 2, 5]))//2
console.log(indexEqualsValue([-3, 0, 1, 3, 10]))//3
//не прошел тесты