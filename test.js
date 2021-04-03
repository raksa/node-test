function orderWeight(strng) {
    strng = strng.split(' ');
    const w = (a) => a.split('').map(e => ~~e).reduce((s, e) => s + e, 0);
    strng = strng.sort((a, b) => {
        if (w(a) - w(b)) return w(a) - w(b);
        return a < b ? -1 : 1;
    }).join(' ');
    console.log(strng);
    return strng;
}

console.log(orderWeight("103 123 4444 99 2000") === "2000 103 123 4444 99");
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123") === "11 11 2000 10003 22 123 1234000 44444444 9999");