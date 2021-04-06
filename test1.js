function multi(nStr, m) {
    nStr = nStr.split('').map(e => ~~e).reverse();
    let r = 0;
    for (let i = 0; i < nStr.length; i++) {
        r = nStr[i] * m;
        nStr[i] = r % 10;
        r = ~~(r / 10);
    }
    r && nStr.push(r);
    return nStr.reverse().join('');
}
console.log(multi('94000000045677', 2));