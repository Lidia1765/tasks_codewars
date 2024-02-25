function sortArray(array) {
    let odd = array.filter((a) => a % 2).sort((x, y) => (x - y))
    return array.map(q => q % 2 ? odd.shift() : q)
}
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))