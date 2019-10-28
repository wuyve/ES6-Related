function * iterator01(end) {
    for(let i = 0; i < end; i++) {
        yield parseInt(10 * (i + Math.random()));
    }
}
for(let n of iterator01(10)) {
    console.log(n);
}
let numbers = [...iterator01(20)];
let [a, b, c, ...others] = iterator01(8);
console.log(numbers);
console.log(a, b, c);
console.log(others);