var format = function (str, obj) {
    let key = Object.keys(obj);
    let value = Object.values(obj)
    console.log(key[0])
    let newStr = '';
    for (let i = 0; i < key.length; i++) {
        newStr = str.replace(key[i], value[i])
        console.log(newStr)
    }
    console.log(newStr)
    return newStr
}
console.log(format('Hello {foo} - make me a {bar}', {
    foo: 'Jack',
    bar: 'sandwich'
}))//Hello Jack - make me a sandwich
console.log(format('Hello {0} - {foobar} make me {2} {1} - I\'m full..', ['Jack', 'sandwiches', 0]))
//"Hello Jack - {foobar} make me 0 sandwiches - I\'m full.."