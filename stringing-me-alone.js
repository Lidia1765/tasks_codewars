function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}
function sum(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}
const createMessage = curry(sum)
console.log(createMessage("Hello")("World!")("how")("are")("you?")())