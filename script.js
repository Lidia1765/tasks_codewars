function filterHomogenous(arrays) {
    let newArr = [];
    if (arrays !== undefined) {
        for (let i = 0; i < arrays.length; i++) {
            let str = 0;
            let num = 0;
            if (arrays[i] !== undefined && arrays[i].length !== 0) {
                for (let j = 0; j < arrays[i].length; j++) {
                    if (typeof arrays[i][j] === 'number') {
                        num++
                    }
                    if (typeof arrays[i][j] === 'string') {
                        str++
                    }

                }
                if ((str === arrays[i].length || num === arrays[i].length)) {
                    newArr.push(arrays[i])
                }
            }
        }
    }
    return newArr
}
console.log(filterHomogenous([[undefined]]))