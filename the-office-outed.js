function outed(meet, boss) {
    let values = Object.values(meet)
    for (let key in meet) {
        if (key.indexOf(boss) !== -1) {
            values.push(meet[key]);
        }
    }
    console.log(values)
    let sum = values.reduce((a, b) => a + b)
    console.log(sum)
    sum = sum / 10
    console.log(sum)
    if (sum <= 5) {
        return 'Get Out Now!'
    }
    return 'Nice Work Champ!'
}
console.log(outed({ 'tim': 0, 'jim': 2, 'randy': 0, 'sandy': 7, 'andy': 0, 'katie': 5, 'laura': 1, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 0 }, 'laura'))//Get Out Now!
console.log(outed({ "tim": 8, "jim": 4, "randy": 6, "sandy": 7, "andy": 5, "katie": 0, "laura": 8, "saajid": 3, "alex": 2, "john": 7, "mr": 5 }, 'katie'))//Nice Work Champ!