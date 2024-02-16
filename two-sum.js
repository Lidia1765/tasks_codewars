function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        let num = (numbers[i] - target) * -1;
        console.log(numbers[i])
        console.log(num)
        let index = numbers.findIndex(item => (item === num && item !== i));
        console.log(index)
        if (index !== -1 && index !== i) {
            return [i, index]
        }
    }
}
console.log(twoSum([1, 2, 3, 3, 2, 1], 4)) // [0,2]
console.log(twoSum([2, 2, 3], 4)) // [ 0,1] or [1,0]