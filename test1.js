const Calculator = function () {
    this.evaluate = function (string) {
        string = string.replace(/\s/g, '');
        let r = null;
        if (/\+/.test(string)) {
            r = string.split('+').reduce((s, e) => s + this.evaluate(e), 0);
        } else if (/\-/.test(string)) {
            const arr = string.split('-');
            const first = (string[0] == '-' ? -1 : 1) * this.evaluate(arr.shift());
            r = arr.reduce((s, e) => s - this.evaluate(e), first);
        } else if (/\*/.test(string)) {
            r = string.split('*').reduce((s, e) => s * this.evaluate(e), 1);
        } else if (/\//.test(string)) {
            const arr = string.split('/');
            const first = this.evaluate(arr.shift());
            r = arr.reduce((s, e) => s / this.evaluate(e), first);
        } else {
            r = Number(string);
        }
        console.log(`last: ${string} = ${r}`);
        return r;
    }
};

var calculate = new Calculator()
// console.log(calculate.evaluate('127') == 127);
// console.log(calculate.evaluate('2 + 3') == 5);
// console.log(calculate.evaluate('2 - 3 - 4') == -5);
// console.log(calculate.evaluate('10 * 5 / 2') == 25);
console.log(calculate.evaluate('2 + 3 * 4 / 3 - 6 / 3 * 3 + 8') - 8 < 0.1);
