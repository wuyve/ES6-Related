let ms_count = Date.UTC(2100, 10, 1, 19, 45, 30);
let special = new Date(ms_count);
console.log(Date.now());  // 1573290406523
console.log(ms_count);  // 4128781530000
console.log(special.getTime());  // 4128781530000
console.log(special.valueOf());  // 4128781530000
console.log(Date.parse(special));  // 4128781530000

console.log(typeof ms_count);  // number
console.log(typeof special.getTime());  // number
console.log(typeof special.valueOf());  // number
console.log(typeof Date.parse(special));  // number