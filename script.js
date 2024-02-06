function isLeapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && !(year % 100 === 0))) {
        return true
    }
    return false
}
console.log(isLeapYear(2020))//true
console.log(isLeapYear(2015))//false
console.log(isLeapYear(2100))//false