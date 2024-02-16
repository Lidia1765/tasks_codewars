function arithmetic(a, b, operator) {
    //your code here!
    if (operator === 'add') {
        return a + b
    }
    if (operator === 'subtract') {
        return a - b
    }
    if (operator === 'multiply') {
        return a * b
    }
    if (operator === 'divide') {
        return a / b
    }
}
console.log(arithmetic(8, 2, "subtract"))//6
console.log(arithmetic(5, 2, "multiply"))//10
console.log(arithmetic(8, 2, "divide"))//4