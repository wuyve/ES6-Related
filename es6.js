/************************************************************************ */
// 块级作用域
// {
//     let height = 100;
//     {
//         let height = 4;
//         {
//             let height = 3;
//             {
//                 let height = 1;
//                 console.log('height of a desk = ', height);
//             }
//             console.log('height of a room = ', height);
//         }
//         console.log('height of one floor = ', height);
//     }
//     console.log('height of the building = ', height);
// }
// console.log('');
// for (var m = 1; m < 10; m++) {
//     for (var n = 1; n < 10; n++) {
//         console.log(`kernel count = (${m}, ${n})`);
//     }
//     console.log(`inner count = (${m}, ${n})\n\n`);  // n永远为10
// }
// console.log(`outer count = (${m}, ${n})`); // 10 10
// console.log('');
// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(`kernel count = (${i}, ${j})`);
//     }
//     console.log(`inner count = (${i}, ${j})\n\n`);  // 此行报错，j is not defined
// }
// console.log(`outer count = (${i}, ${j})`);   // 此行报错，i is not defined
// console.log('');


/******************************************************************************** */
// 算数运算符
// let num01 = 125, num02 = 10, num03 = 5;
// let result = 0;

// result = num01 % num02;
// console.log(result);

// result = num01 / num02;
// console.log(result);

// result = num01 * num02;
// console.log(result);

// result = num01 + num02 - num03;
// console.log(result);

// result = ++num01;
// console.log(result, num01);

// result = num03++;
// console.log(result, num03)

// ++num01;
// num01++;
// console.log(num01);

// num01 += 1;
// console.log(num01);

// num01 = num01 + 1;
// console.log(num01);

// result = --num02;
// console.log(result, num02);

// result = num02--;
// console.log(result, num02);

// --num02;
// num02--;
// console.log(num02);

// num02 -= 1;
// num02 = num02 - 1;
// console.log(num02);

// result = num03 ** 3 ** 2;
// console.log(result);

// result = num03 ** (3 ** 2);
// console.log(result);

// result = (num03 ** 3) ** 2;
// console.log(result);


/******************************************************************************** */
// 赋值运算符
// let a = 18, b = 5, c = 2;
// let result = 0;

// result = a + b + c;
// console.log('result', result);

// a += b;
// console.log('a', a);

// a -= b;
// console.log('a', a);

// a *= b;
// console.log('a', a);

// a /= b;
// console.log('a', a);

// a %= b;
// console.log('a', a);

// b **= c;
// console.log('b', b);

// b <<= c;
// console.log('b', b);

// b >>= c;
// console.log('b', b);

// b >>>= c;
// console.log('b', b);

// b &= c;
// console.log('b', b);

// b ^= c;
// console.log('b', b);

// b |= c;
// console.log('b', b);


/*********************************************************** */
// 类型运算符
// let num01 = 33, num02 = 1.414;

// console.log(typeof num01); // number
// console.log(typeof 33); // number
// console.log(typeof num02); // number
// console.log(typeof 1.414); // number

// console.log('');

// console.log(typeof Math.PI); // number
// console.log(typeof NaN); // number
// console.log(typeof Infinity); // number
// console.log('');

// console.log(typeof '');  // string
// console.log(typeof "");  // string
// console.log(typeof 'hello, earth');  // string
// console.log('');

// console.log(typeof true);  // boolean
// console.log(typeof false);  // boolean
// console.log(typeof (num01 > num02));  // boolean
// console.log('');

// console.log(typeof undefined);  // undefined
// console.log(typeof num03);  // undefined
// console.log('');

// console.log(typeof function(){});  // function
// console.log(typeof Array.isArray);  // function
// console.log('');

// console.log(typeof Object());  // object
// console.log(typeof new Object());  // object
// console.log(typeof {});  // object
// console.log('');

// console.log(typeof Array());  // object
// console.log(typeof new Array());  // object
// console.log(typeof []);  // object
// console.log('');

// console.log(typeof null);  // object
// console.log('');

// console.log(typeof String('test'));  // string
// console.log(typeof new String('test'));  // object
// console.log('');

// console.log(typeof Number(123));  // number
// console.log(typeof new Number(123));  // object
// console.log('');

// console.log(typeof Date());  // string
// console.log(typeof new Date());  // object


/************************************************************************ */
// 按位运算符
// let num01 = 56, num02 = 77;
// let num03 = 124; num04 = -3;
// let result = 0;

// console.log(num01.toString(2));  // 转换为2进制 111000
// console.log(num02.toString(2));  // 1001101
// console.log(num03.toString(2));  // 1111100
// console.log('')

// console.log(num01 == 0b111000);  // true
// console.log(num01 == 0b00111000);  // true
// console.log('');

// console.log(num02 == 0b1001101);  // true
// console.log(num02 == 0b01001101);  // true
// console.log('');

// console.log(num03 == 0b1111100);  // true
// console.log(num03 == 0b01111100);  // true
// console.log('');

// result = num01 & num02;
// console.log(result);  // 8
// console.log(result.toString(2));  // 1000
// console.log('')

// result = num01 | num02;
// console.log(result);  // 125
// console.log(result.toString(2));  // 1111101
// console.log('')

// result = num01 ^ num02;
// console.log(result);  // 117
// console.log(result.toString(2));  // 1110101
// console.log('')

// result = ~ num03;
// console.log(result);  // -125
// console.log(result.toString(2));  // -1111101
// console.log('')

// result = num03 << 1;
// console.log(result);  // 248
// console.log(result.toString(2));  // 11111000
// console.log('')

// result = num03 >> 1;
// console.log(result);  // 62
// console.log(result.toString(2));  // 111110
// console.log('')

// result = num04 >>> 1;
// console.log(num04.toString(2));  // -11
// console.log(result);  // 2147483646
// console.log((2 ** 31 - 1) - 1);  // 2147483646
// console.log(result.toString(2));  // 1111111111111111111111111111110


/************************************************************************* */
// 扩展运算符
var greetings = ['hi', 'howdy', 'hey man', 'g\'day mate'];
var extended_greetings = ['Long time no see', 'Nice to see you', 'hiya', ...greetings];
console.log(extended_greetings);
console.log('');

var number_texts = ['one', 'two', 'three'];
var number_digits = '123';
var numbers = [...number_texts, ...number_digits];
console.log(numbers);  // ['one', 'two', 'three', 1, 2, 3]
console.log('');

let birthday = new Date(1999, 11, 25, 20, 20);
let now = new Date();
console.log(birthday.toLocaleString());  // 1999-12-25 8:20:00 PM
console.log(now.toLocaleString());  // 2019-10-7 9:50:40 AM
console.log('');

let arr01 = [1, 2, 3];
let arr02 = [10, 20, 30];
let arr03 = [...arr01, ...arr02, 100, 200, 300];

let obj01 = {name: 'obj01', amout: 10};
let obj02 = {name: 'obj02', amout: 5, origin: 'thai'};
let obj03 = {...obj01, ...obj02};  // 对象中使用扩展符为合并对象

console.log(arr03);  // [ 1, 2, 3, 10, 20, 30, 100, 200, 300 ]
console.log(obj03);  // { name: 'obj02', amout: 5, origin: 'thai' }


/**************************************************************************************** */
// 删除运算符



/*************************************************************************************************** */
// 数值类型



/****************************************************************************************** */
// 数值的正负号



/****************************************************************************************** */
// 数值的截断



/********************************************************************************* */
// 数值的特殊格式



/************************************************************************************************** */
// 整数值的安全范围



/******************************************************************************************* */
// 布尔类型


