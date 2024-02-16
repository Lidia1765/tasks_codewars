function proofread(str) {
    let lower = str.toLowerCase()
    let arr = lower.split('')
    let newArr = [];
    newArr.push(arr[0].toUpperCase())
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'i' && arr[i + 1] === 'e') {
            newArr.push('e')
        } else if (arr[i] === 'e' && arr[i - 1] === 'i') {
            newArr.push('i')
        } else if (arr[i - 2] === '.') {
            let capital = arr[i].toUpperCase()
            newArr.push(capital)
        } else {
            newArr.push(arr[i])
        }
    }
    newArr.splice(1, 1)
    return newArr.join('')

}
console.log(proofread('He haD iEght ShOTs of CAffIEne.'))// He had eight shots of caffeine.
console.log(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."))// Their deceit was inconceivable. She seized the moment.