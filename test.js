function pathFinder(maze) {
    let pathSteps = maze.split('\n').map(e => e.split(''));
    const N = pathSteps.length;
    const n = N - 1;
    const wallMap = {};
    let upperWall = 0;
    let lowerWall = 0;
    pathSteps.forEach((e, i) => {
        e.forEach((e1, i1) => {
            if (e1 === 'W') {
                if (i + i1 > N) {
                    upperWall++;
                } else if (i + i1 < N) {
                    lowerWall++;
                }
            }
        });
    });
    if (upperWall > lowerWall) {
        pathSteps = pathSteps.map(e => {
            return e.reverse();
        }).reverse();
    }
    pathSteps.forEach((e, i) => {
        e.forEach((e1, i1) => {
            if (e1 === 'W') {
                wallMap[`${i},${i1}`] = true;
            }
        });
    });
    const _walk = (stepped, x, y) => {
        const k = `${y},${x}`;
        if (stepped[k] || wallMap[k] || x < 0 || y < 0 || x > n || y > n) {
            return false;
        }
        if (x == n && y == n) return true;
        stepped[k] = true;
        if (x < y) {
            return _walk(Object.assign({}, stepped), x + 1, y) || _walk(Object.assign({}, stepped), x, y + 1) ||
                _walk(Object.assign({}, stepped), x - 1, y) || _walk(Object.assign({}, stepped), x, y - 1);
        }
        return _walk(Object.assign({}, stepped), x, y + 1) || _walk(Object.assign({}, stepped), x + 1, y) ||
            _walk(Object.assign({}, stepped), x, y - 1) || _walk(Object.assign({}, stepped), x - 1, y);
    }
    return _walk({ '0,0': true }, 1, 0) || _walk({ '0,0': true }, 0, 1)
}
/*
. . . . . .
. . . . . .
. . . . . .
. . . . . .
. . . . . W
. . . . W .
*/
function testMaze(expected, maze) {
    let actual = pathFinder(maze);
    console.log(actual == expected);
}

testMaze(true,
    `.W.
.W.
...`);

testMaze(false,
    `.W.
.W.
W..`);

testMaze(true,
    `......
......
......
......
......
......`);

testMaze(false,
    `......
......
......
......
.....W
....W.`);