function runLengthEncoding(str) {
    const res = [];
    let counter = 1;

    for (let i = 0; i < str.length + 1; i++) {
        if (str[i] !== str[i + 1]) {
            res.push([counter, str[i]]);
            counter = 0;
        }
        ++counter;
    }

    return res;
}
console.log(runLengthEncoding("hello world!"))
//[[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"))