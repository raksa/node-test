function perimeter(n) {
    const fibs = [];
    if (n >= 0) fibs.push(1);
    if (n >= 1) fibs.push(2);
    let m = n - 1;
    while (m-- > 0) {
        const num = fibs[fibs.length - 2] + fibs[fibs.length - 1] + 1;
        fibs.push(num);
    }
    return 4 * fibs[n];
}
// Array.from({ length: 6 }, (_, i) => console.log(i, perimeter(i)));

console.log(perimeter(0) === 4);
console.log(perimeter(5) === 80);
console.log(perimeter(7) === 216);
console.log(perimeter(20) === 114624);
console.log(perimeter(30) === 14098308);

// f(n) = f(n - 1) + f(n - 2) + 1
// = f(n-1-1)+f(n-1-2)+1+f(n-2-1)+f(n-2-2)+1
// = f(n-2) + f(n-3) + f(n-3)+f(n-4)+2
// = f(n-2)+2*f(n-3)+f(n-4)+2