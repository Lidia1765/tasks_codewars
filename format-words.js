function formatWords(words) {
    let arr = []
    if (words !== null && words !== undefined) {
        for (let i = 0; i < words.length; i++) {
            if (words[i] !== '')
                arr.push(words[i], ', ')
        }
        arr.pop()
        arr[arr.length - 2] = ' and '
    }
    return arr.join('')
}
console.log(formatWords(['one', 'two', '', 'three', 'four']))//'one, two, three and four'