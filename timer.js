const { performance } = require('perf_hooks');

module.exports = function timer(cb) {
    var t0 = performance.now()
    cb();
    var t1 = performance.now()
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
}