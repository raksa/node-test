function search(ints, m) {
    for (let i = 0; i < ints.length; i++) {
        if (ints[i] < m) {
            return i;
        }
    }
    return 0;
}
function sumPairs(ints, s) {
    const m = ~~(s / 2);
    const found = [];
    while (ints.length) {
        const i1 = search(ints, m);
        const item = ints[i1];
        const target = s - item;
        for (let i2 = 0; i2 < ints.length; i2++) {
            if (i1 === i2) continue;
            if (target === ints[i2]) {
                if (i1 < i2) {
                    const temp = ints.splice(i2, 1)[0];
                    return [ints.splice(i1, 1)[0], temp];
                } else {
                    const temp = ints.splice(i1, 1)[0];
                    return [ints.splice(i2, 1)[0], temp];
                }
            }
        }
        ints.splice(i1, 1);
    }
}
// let a = sumPairs([1, 4, 8, 7, 3, 15], 8);
// console.log(a, a.join() == [1, 7].join());
a = sumPairs([10, 5, 2, 3, 7, 5], 10);
console.log(a, [3,7]);
// a = sumPairs([10, 5, 2, 3, 7, 5], 10);
// console.log(a, [3, 7]);
// sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2"
// sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10"

// sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8"
// sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6"
// sumPairs([20, -13, 40], -7), undefined, "No Match: [20, -13, 40] should return undefined for sum = -7"
// sumPairs([4, -2, 3, 3, 4], 8), [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8"
// sumPairs([0, 2, 0], 0), [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0"
// sumPairs([5, 9, 13, -3], 10), [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10"