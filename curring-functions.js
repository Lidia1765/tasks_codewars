function multiplyAll(arr) {
    return function (num) {
        return arr.map(elem => elem * num)
    }
}

console.log(multiplyAll([1, 2, 3])(2))//[ 2, 4, 6 ]
console.log(multiplyAll([1, 2, 3])(0))//[ 2, 4, 6 ]
