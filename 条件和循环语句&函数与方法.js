// 条件和循环语句&函数与方法
/******************************************************************************** */
// 循环语句
// for(...) { }
// for(... of ...) { }
// for(... in ...) { }
// 在for语句中，关键字of或in的存在与否，会影响其迭代方式：
// 1.没有关键字of和in，仅依据特定变量的数据是否符合特定条件，而被进行迭代任务；
// 2.存在关键字of，必须根据特定变量的数组实例中的元素个数，而被进行迭代任务；
// 3.存在关键字in，必须根据特定变量的对象实例中的属性个数，而被进行迭代任务；
// let fruits = ['apple', 'blueberry', 'cherry', 'durian', 'Fig', 'Grape', 'Haw', 'Kiwi', 'Lichee', 'Mango', 'Nucleus', 'Orange', 'Pear', 'Raspberry', 'Strawberry', 'Tangerine', 'Watermelon'];
// let message = '';
// for (let i = 1; i < fruits.length + 1; i++) {
//     message += `(${i}) ${fruits[i - 1]}`;
// }
// console.log(message);  // (1) apple(2) blueberry(3) cherry(4) durian(5) Fig(6) Grape(7) Haw(8) Kiwi(9) Lichee(10) Mango(11) Nucleus(12) Orange(13) Pear(14) Raspberry(15) Strawberry(16) Tangerine(17) Watermelon
// console.log('');

// for(let value of fruits) {
//     message += `${value}`;
// }
// console.log(message);  // (1) apple(2) blueberry(3) cherry(4) durian(5) Fig(6) Grape(7) Haw(8) Kiwi(9) Lichee(10) Mango(11) Nucleus(12) Orange(13) Pear(14) Raspberry(15) Strawberry(16) Tangerine(17) WatermelonappleblueberrycherrydurianFigGrapeHawKiwiLicheeMangoNucleusOrangePearRaspberryStrawberryTangerineWatermelon
// console.log('');

// let product = {
//     id: 5687,
//     name: 'dell PC',
//     color: 'black',
//     price: '6000',
//     os: 'windows'
// };
// let message = '';

// for(let str in product) {
//     message += `${str} `;
// }
// console.log(message);  // id name color price os

// for ... of语句必须配合可迭代的对象实例，才可迭代其各个属性。
// let a01 = [520, 530, 1314, 2013, 2014, 2591.8];
// let sum = 0;
// for (let num of a01) {
//     sum += num;
//     console.log(`current number = ${num}`);
// }
// console.log('');

// let greetings = 'hello, world, solar system, galaxy';
// for (let c of greetings) {
//     console.log(c);
// }
// console.log('');

// function display(...args) {
//     for (let arg of args) {
//         console.log(arg);
//     }
//     console.log('');

//     for (let arg of arguments) {
//         console.log(arg);
//     }
// }
// display('what', 'when', 'where', 'which', 'who');

// function * gen01 () {
//     let top_value = parseInt(30 * Math.random());
//     for (let i = 1; i < top_value; i += 3) {
//         yield i;
//     }
// }

// let gen02 = {
//     * [Symbol.iterator] () {
//         let top_value = parseInt(30 * Math.random());
//         for (let i = 1; i < top_value; i += 3) {
//             yield i;
//         }
//     }
// };

// for(let num of gen01()) {
//     console.log(num);
// }
// console.log('');

// for(let num of gen02) {
//     console.log(num);
// }

// let number_array = [...gen01()];
// console.log(number_array);
// console.log('');

// class Plants {
//     * solar_system() {
//         let planet_list = ['水星(Mercury)', '金星(Venus)', '地球(Earth)', '火星(Mars)', '木星(Jupiter)', '土星(Saturn)', '天王星(Uranus)', '海王星(Neptune)', '冥王星(Pluto)'];
//         for(let planet of planet_list) {
//             yield planet;
//         }
//     }
// }
// p01 = new Plants();
// let a_copy = [...p01.solar_system()];
// console.log(a_copy);


/****************************************************************************************************************************** */
// while相关语句
// let fruits = ['apple', 'blueberry', 'cherry', 'durian', 'Fig', 'Grape', 'Haw', 'Kiwi', 'Lichee', 'Mango', 'Nucleus', 'Orange', 'Pear', 'Raspberry', 'Strawberry', 'Tangerine', 'Watermelon'];
// let product = {
//     id: 5687,
//     name: 'dell PC',
//     color: 'black',
//     price: '6000',
//     os: 'windows'
// };
// let message = '', count = 1;
// while (count < fruits.length + 1) {
//     message += `(${count}) ${fruits[count - 1]}`;
//     count++;
// }
// console.log(message);  // (1) apple(2) blueberry(3) cherry(4) durian(5) Fig(6) Grape(7) Haw(8) Kiwi(9) Lichee(10) Mango(11) Nucleus(12) Orange(13) Pear(14) Raspberry(15) Strawberry(16) Tangerine(17) Watermelon
// console.log('');

// message = '', count = 1;
// do {
//     message += `(${count}) ${fruits[count - 1]}`;
//     count++;
// } while (count < fruits.length + 1);
// console.log(message);  // (1) apple(2) blueberry(3) cherry(4) durian(5) Fig(6) Grape(7) Haw(8) Kiwi(9) Lichee(10) Mango(11) Nucleus(12) Orange(13) Pear(14) Raspberry(15) Strawberry(16) Tangerine(17) Watermelon
  

/******************************************************************************************************* */
// break 和 continue 语句
// let weekday = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
//     message = 'The working days of this week',
//     bnum = 3 + parseInt(4 * Math.random()),
//     cnum01 = parseInt(3 * Math.random()),
//     cnum02 = 3 + parseInt(4 * Math.random());
// for (let i = 0; i < weekday.length; i++) {
//     if (i == bnum) break;
//     message += weekday[i] + ',';
// }
// message = message.slice(0, -2);
// console.log(message);  // The working days of this weekMon,Tues,We

// let message01 = 'Cannot have day-off on: ';
// for (let i = 0; i < weekday.length; i++) {
//     if (i == cnum01 || i == cnum02) continue;
//     message01 += weekday[i] + ',';
// }
// message01 = message01.slice(0, -2);
// console.log(message01);  // Cannot have day-off on: Mon,Wed,Thur,Fri,Sa


/******************************************************************* */
// 匿名函数
/**
语法格式：
(1): function (参数) { }
(2): (function (参数) { }) ()
(3): void function (参数) { }
 */

// (function () {
//     console.log('Anonymous 01 function is executed!');  // Anonymous 01 function is executed!
// }) ();
// void function () {
//     console.log('Anomynous function 02 is executed.');  // Anomynous function 02 is executed.
// } ();
// setTimeout(function () {
//     console.log('Showing after 2 seconeds.');  // 2秒后执行； Showing after 2 seconeds.
// }, 2000);

// let displaying = function (num = 0) {
//     console.log(`The test number = ${num}`);
// };
// displaying(15);  // The test number = 15
// setTimeout(() => {
//     console.log('The test number = 1800');
// }, 3000);  // The test number = 1800


/*********************************************************************************** */
// 对象函数
/**
 形式：
 (1): var 变量名 = {
     ...,
     对象函数名: function (参数) {
         ...;
     },
     ...
 }
 (2): 变量名 = {
     ...,
     对象函数名 (参数) {
         ...;
     },
     ...
 }
 */

// var r_obj = {
//     circle_area(r) {
//         return Math.PI * r * r;
//     },
//     circumference(r) {
//         return 2 * Math.PI * r;
//     },
//     sphere_vollume(r) {
//         return 4 / 3 * Math.PI * Math.pow(r, 3);
//     },
//     cylinder_volume(r,h) {
//         return this.circle_area(r) * h;
//     }
// }
// console.log(r_obj.circle_area(10));
// console.log(r_obj['circle_area'](10));
// console.log(r_obj.circumference(15));
// console.log(r_obj['circumference'](15));
// console.log(r_obj.sphere_vollume(20));
// console.log(r_obj['sphere_vollume'](20));
// console.log(r_obj.cylinder_volume(10, 20));
// console.log(r_obj['cylinder_volume'](10, 20));


// var cubic_obj = {
//     length: 1,
//     width: 1,
//     height: 1,
//     volume: function () {
//         return this.length * this.width * this.height;
//     }
// }
// console.log(cubic_obj.volume());  // 1
// console.log('');

// cubic_obj.length = 10;
// cubic_obj.width = 20;
// cubic_obj.height = 30;
// console.log(cubic_obj.volume());  // 6000


/******************************************************************************************** */
// 箭头函数


/***************************************************************************** */
// 块范围的函数


/***************************************************************************** */
// 参数列


/***************************************************************************** */
// 参数的默认数据


/***************************************************************************** */
// 参数的一般配对


/***************************************************************************** */
// 参数的扩展配对


/***************************************************************************** */
