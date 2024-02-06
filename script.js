function createPhoneNumber(numbers) {
    numbers[0] = '(' + numbers[0];
    numbers[2] = numbers[2] + ') ';
    numbers[5] = numbers[5] + '-';
    return numbers.join('')

}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))//"(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))//"(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))//"(123) 456-7890"