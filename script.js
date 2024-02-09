function insertDash(num) {
    let str = String(num);
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 !== 0 && str[i + 1] !== undefined && str[i + 1] % 2 !== 0) {
            arr.push(str[i], '-')
        } else {
            arr.push(str[i])
        }
    }
    return `${arr.join('')}`
}
console.log(insertDash(134576))