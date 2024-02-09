function bingo(ticket, win) {
    let count = 0;
    for (let i = 0; i < ticket.length; i++) {
        let word = ticket[i][0]
        //let str = word.split('')
        for (let j = 0; j < word.length; j++) {
            if (word[j].charCodeAt(0) === ticket[i][1]) {
                count++
                break;
            }
        }

    }
    if (count >= win) {
        return 'Winner!'
    }
    return 'Loser!'

}
console.log(bingo([['ZLLK', 80], ['WFLFEUU', 82], ['HRRUTZJE', 78], ['AOVB', 67], ['HH', 72]], 1))// 'Winner!'
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 66]], 2))// 'Winner!'
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3))// 'Loser!'
