function dbSort(a) {
    const num = a.filter(el => typeof el === "number").sort((a, b) => a - b);
    const str = a.filter(el => typeof el === "string").sort()
    return num.concat(str)
}
console.log(dbSort([6, 2, 3, 4, 23, 5]))// [ 2, 3, 4, 5, 6, 23 ]
console.log(dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"]))// [ 0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange' ]