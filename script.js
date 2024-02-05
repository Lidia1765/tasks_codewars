function evenOrOdd(number) {
    if (number % 2) {
        return 'Odd'
    }
    return 'Even'
}
console.log(evenOrOdd(2)) //Even
console.log(evenOrOdd(7)) //Odd
console.log(evenOrOdd(-42)) //Even
console.log(evenOrOdd(0)) //Even