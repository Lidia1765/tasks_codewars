function validParentheses(parens) {
    let result = 0;

    for (var i = 0; i < parens.length && result >= 0; i++) {
        result += (parens[i] == '(') ? 1 : -1;
    }

    return (result == 0);
}
console.log(validParentheses(")()()()("))// false
console.log(validParentheses("(()()()())(())"))// true
