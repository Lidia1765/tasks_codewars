function args_count() {

    return arguments.length
}
console.log(args_count(1, 2))//2
console.log(args_count())//0
console.log(args_count(["foo", "bar"]))//1