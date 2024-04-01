function deepCompare(o1, o2) {
    if (o1 === o2) return true;
    if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;
    if (Object.keys(o1).length !== Object.keys(o2).length) return false;
    var keys = Object.keys(o1);
    return keys.every(function (key) {
        return deepCompare(o1[key], o2[key]);
    });
};