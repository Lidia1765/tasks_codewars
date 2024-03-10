function formatMoney(amount) {
    const fixedFormat = amount.toFixed(2);
    return '$' + fixedFormat
}
console.log(formatMoney(39.90))//