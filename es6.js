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



/************************************************************************ */
// 按位运算符



/************************************************************************* */
// 扩展运算符