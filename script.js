function getCount(str) {
    str.split('')
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            sum++
        }
    }
    return sum
}
console.log(getCount('abracadabra'))//5
console.log(getCount('pear tree'))//4