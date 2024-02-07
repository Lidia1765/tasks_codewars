function generateShape(integer) {
    let square = integer * integer;
    let arr = [];
    let result = [];
    for (let i = 0; i < square; i++) {
        arr.push('+')
    }
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])
        if ((i + 1) % integer === 0) {
            result.push('\n')
        }
    }
    result.pop()
    return result.join('')
}
console.log(generateShape(3))

function generateShape(integer) {
    let plus = integer * integer; // 4 * 4 = 16
    let arr = []; // [16]
    let result = []
    for (let i = 0; i < plus; i++) {
        arr.push('+')
    }
    for (let j = 0; j < arr.length; j++) {
        result.push(arr[j])

        if ((j + 1) % integer === 0) {
            result.push('\n')
        }
    }
    result.pop()
    return result.join('')
} 