function scoreboard(string) {
    let res = []
    let arr = string.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'nil') {
            res.push(0)
        } if (arr[i] === 'one') {
            res.push(1)
        } if (arr[i] === 'two') {
            res.push(2)
        } if (arr[i] === 'three') {
            res.push(3)
        } if (arr[i] === 'four') {
            res.push(4)
        } if (arr[i] === 'five') {
            res.push(5)
        } if (arr[i] === 'six') {
            res.push(6)
        } if (arr[i] === 'seven') {
            res.push(7)
        } if (arr[i] === 'eight') {
            res.push(8)
        } if (arr[i] === 'nine') {
            res.push(9)
        }
    }
    return res
}
console.log(scoreboard("The score is four nil"))// [4,0]
console.log(scoreboard("new score: two three"))// [2,3]