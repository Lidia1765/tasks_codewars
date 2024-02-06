function abbrevName(name) {
    let arr = name.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            let word = arr[i + 1]
            return (arr[0] + '.' + word).toUpperCase()
        }
    }

}
console.log(abbrevName('Sam harris')) // S.H
console.log(abbrevName('P Favuzzi'))// P.F
console.log(abbrevName('david mendieta'))//D.M