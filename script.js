function findShort(s) {
    let arr = s.split(' ');
    let min = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < min) {
            min = arr[i].length
        }
    }
    return min
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))//3
console.log(findShort("Let's travel abroad shall we"))//2