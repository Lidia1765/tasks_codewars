function chain(input, fs) {
    // implement the "chain" function
    return v => input.map(x => v * x);
    for (let i in fs) {
        if (fs[i] === add) {
            function add(input) {
                return input + 1
            }
        } else {
            function mult(add) {
                return add * 30
            }
        }
    }
}
console.log(chain(2, [add, mult]))