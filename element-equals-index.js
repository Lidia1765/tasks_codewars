function indexEqualsValue(a) {
    let start = 0;
    let end = a.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (a[mid] === mid && a[mid - 1] !== mid - 1) {
            return mid;
        } else if (a[mid] >= mid) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1
}
console.log(indexEqualsValue([-8, 0, 2, 5]))//2
console.log(indexEqualsValue([-3, 0, 1, 3, 10]))//3
console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]))//1