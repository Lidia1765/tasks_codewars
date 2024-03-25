Array.prototype.square = function () {
    return this.map((elem) => Math.pow(elem, 2))
}
Array.prototype.cube = function () {
    return this.map((elem) => Math.pow(elem, 3))
}
Array.prototype.average = function () {
    if (this.length === 0) { return Number.NaN }
    return this.reduce((a, b) => a + b) / this.length
}
Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b)
}
Array.prototype.even = function () {
    return this.filter((a) => a % 2 === 0)
}
Array.prototype.odd = function () {
    return this.filter((a) => a % 2 !== 0)
}