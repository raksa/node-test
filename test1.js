var count = function (arr) {
    return arr.reduce((r, e) => {
        e.forEach(e1 => {
            r[e1] = r[e1] || 0;
            r[e1]++;
        });
        return r;
    }, {});
}
console.log(count([
    [1, 2],
    [3, 5]
]));