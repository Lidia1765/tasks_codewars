var countSheep = function (num) {
    let text = "";

    for (let x = 0; x < num; x++) {
        text += `${x + 1} sheep... `
    }

    return text;
}
console.log(countSheep(1))//1 sheep...
console.log(countSheep(0))//1 sheep...
console.log(countSheep(3))//1 sheep...