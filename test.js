var Sudoku = function (data) {
    //   Private methods
    // -------------------------
    var hasDuplicate = function (arr) {
        return Array.from(new Set(arr)).length !== arr.length;
    }
    var rotate = function (arr) {
        return arr.reduce((r, e) => {
            e.forEach((e1, i1) => {
                r[i1] = r[i1] || [];
                r[i1].push(e1);
            });
            return r;
        }, []);
    }
    var childBlock = function (arr) {
        const N = arr.length;
        const n = ~~Math.sqrt(N);
        const r = [];
        for (let i = 0; i < N; i++) {
            r[i] = r[i] || [];
            for (let j = 0; j < N; j++) {
                const x = j % n;
                const y = ~~(j / n);
                const v = arr[y][x];
                r[i].push(v);
            }
        }
        return r;
    }
    var elementCount = function (arr) {
        return arr.reduce((r, e) => {
            e.forEach(e1 => {
                r[e1] = r[e1] || 0;
                r[e1]++;
            });
            return r;
        }, {});
    }

    //   Public methods
    // -------------------------
    this.isValid = function () {
        // YOUR SOLUTION
        const N = data.length;
        const n = ~~Math.sqrt(N);
        if (!N || N !== data[0].length || n * n !== N) {
            return false;
        }
        if (N == 1) {
            return data[0][0] === 1;
        }
        if (data.some(e => hasDuplicate(e))) {
            return false;
        }
        if (rotate(data).some(e => hasDuplicate(e))) {
            return false;
        }
        if (childBlock(data).some(e => hasDuplicate(e))) {
            return false;
        }
        const elements = elementCount(data);
        if (Object.keys(elements).some(e => ~~e < 1 || ~~e > N)) {
            return false;
        }
        if (Object.values(elements).some(e => e !== N)) {
            return false;
        }
        return true;
    }
};

var goodSudoku1 = new Sudoku([
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],

    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],

    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4]
]);

var goodSudoku2 = new Sudoku([
    [1, 4, 2, 3],
    [3, 2, 4, 1],

    [4, 1, 3, 2],
    [2, 3, 1, 4]
]);

var badSudoku1 = new Sudoku([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],

    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],

    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
]);

var badSudoku2 = new Sudoku([
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1]
]);

console.log(goodSudoku1.isValid() === true);
console.log(goodSudoku2.isValid() === true);
console.log(badSudoku1.isValid() === false);
console.log(badSudoku2.isValid() === false);