function maskify(cc) {
    let arr = cc.split('')
    if (arr.length > 4) {
        let newArr = [];
        for (let i = 0; i < arr.length - 4; i++) {
            newArr.push('#')
        }
        newArr.push(arr[arr.length - 4], arr[arr.length - 3], arr[arr.length - 2], arr[arr.length - 1])
        return newArr.join('')
    }
    return cc

}
console.log(maskify('4556364607935616')) //'############5616'
console.log(maskify('1')) // '1'
console.log(maskify('11111'))// '#1111'