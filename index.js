let amount = 7;
let str01 = `There are\n ${amount} categories.`;
let str02 = String.raw `There are\n ${amount} categories.`;
console.log(str01);
console.log(str02);

let str03 = String.raw({raw: 'abcd'}, '_', '_', '_');
console.log(str03);

str03 = String.raw({raw: 'abcd'}, ... '___');
console.log(str03);

let str04 = String.raw({raw: ['apple', 'banana', 'cherry', '']}, '= 15,', '= 10,', '= 18.');
console.log(str04);