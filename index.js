let iterator01 = {
    *[Symbol.iterator] () {
        for(let i = 0; i < 10; i++) {
            yield parseInt(10 * (i + Math.random()));
        }
    }
}
for(let n of iterator01) {
    console.log(n);
}