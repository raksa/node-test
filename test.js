const timer = require("./timer");

function factorial(n) {
    let s = [1]
    for (let i = 2; i <= n; i++) {
        let temp = 0;
        const l = s.length;
        for (let j = 0; j < l; j++) {
            temp += s[j] * i;
            s[j] = temp % 10;
            temp = ~~(temp / 10);
        }
        while (temp) {
            s.push(temp % 10);
            temp = ~~(temp / 10);
        }
    }
    return s.reverse().join('');
}
// console.log(factorial(1) === '1');
// console.log(factorial(3) === '6');
// console.log(factorial(5) === '120');
// console.log(factorial(9) === '362880');
// console.log(factorial(15) === '1307674368000');
const n = 40000;
console.log(factorial(n));