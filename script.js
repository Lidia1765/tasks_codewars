function solution(str) {
    let arr = str.split('');
    arr.reverse()
    return arr.join('')
}
console.log(solution('world')) //'dlrow'
console.log(solution('hello'))// 'olleh'  
console.log(solution(''))// ''