Object.defineProperty(Array.prototype, 'insert', {
    value: function (index, value) {
        Array.prototype.splice.call(this, index, 0, value);
        return this;
    }
});
console.log([1, 2, 3].insert(0, 42))// [42,1,2,3]  