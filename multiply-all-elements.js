function multiplyAll(arg) {
    return (res) => {
        let newArr = [];
        for (let i of arg) {
            newArr.push(i * res)
        }
        return newArr
    }

}
console.log(multiplyAll([1, 2, 3])(2))