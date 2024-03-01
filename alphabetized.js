function alphabetized(s) {
    let newArr = '';
    let condintion1 = s.match(/[a-z]/g)
    let condintion2 = s.match(/[A-Z]/g)
    newArr = condintion1.concat(condintion2)

    const sorted = newArr.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        return 0;
    })
    return sorted.join('')

}
console.log(alphabetized("mnx2C3eLcqjt7s3CXth72lTc"))
//тесты не прошел