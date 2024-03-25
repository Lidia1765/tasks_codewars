Object.prototype.hash = function (s) {
    s = s.split('.');
    let obj = this;
    for (let i = 0; obj && i < s.length; i++)
        obj = obj[s[i]];
    return obj;
}