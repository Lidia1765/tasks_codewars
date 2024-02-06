function removeChar(str) {
    let arr = str.split('')
    arr.shift()
    arr.pop()
    return arr.join('')

}
console.log(removeChar('eloquent')) //loquen
console.log(removeChar('place')) //lac
console.log(removeChar('country')) //ountr
