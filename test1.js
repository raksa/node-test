const { performance } = require('perf_hooks');

// function removeAtIndex(arr, index) {
//     let newArr = [];
//     let i = 0;
//     while (i < index) {
//         newArr.push(arr[i++]);
//     }
//     const l = arr.length;
//     while (i < l) {
//         newArr.push(arr[i++]);
//     }
// }
var arr = Array.from({ length: 1e4 }, (_, i) => i);
var newArr = [];
var t0 = performance.now()

// for (let i = 0; i < 1e6; i++) parseInt(100001 / 2)
// for (let i = 0; i < 1e6; i++) arr.splice(0, 1)
for (let i = 0; i < 1e6; i++) newArr.push(0)


var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")