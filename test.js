function longestSlideDown(pyramid) {
    function addItem(arr, e) {
        return (arr.join(',') + ',' + e).split(',').map(e => ~~e);
    }
    function path() {
        let result = [[0]];
        while (result[0].length < pyramid.length) {
            const temp = [];
            result.forEach(e => {
                const item = e[e.length - 1];
                temp.push(addItem(e, item));
                temp.push(addItem(e, item + 1));
            });
            result = temp;
        }
        return result;
    };
    const foundPath = path([[0]], 1, pyramid.length);
    let max = 0;
    let maxPath = null;
    for (let i = 0; i < foundPath.length; i++) {
        const temp = foundPath[i].reduce((s, v, i) => s + pyramid[i][v], 0);
        if (temp > max) {
            max = temp;
            maxPath = foundPath[i];
        }
    }
    console.log(max);
    maxPath.forEach((e, i) => {
        console.log(pyramid[i].map((e1, i) => e === i ? '|' + e1 + '|' : e1).join('\t'));
    })
    return max;
}
console.log(longestSlideDown(
    [[75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [40000, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]]) === 1074);