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
// function sphere01 (r) {
//     values = {};
//     values.volume = 4 / 3 * Math.PI * Math.pow(r, 3);
//     values.surface_area = 4 * Math.PI * r * r;
//     return values;
// }
// let sphere02 = (r) => {return {volume: 4 / 3 * Math.PI * Math.pow(r, 3), surface_area: 4 * Math.PI * r * r}};
// console.log(sphere02(10));

// let sphere03 = r => {return {volume: 4 / 3 *  Math.PI * Math.pow(r, 3), surface_area: 4 * Math.PI * r * r}};
// console.log(sphere03(10));

// let sphere04 = r => ({volume: 4 / 3 * Math.PI * Math.pow(r, 30), surface_area: 4 * Math.PI * r * r});
// console.log(sphere04(10));

// let sphere_volume = r => {return 4 / 3 * Math.PI * Math.pow(r, 3)};
// console.log(sphere_volume(10));

// let sphere_surface_area = r => 4 * Math.PI * r * r;
// console.log(sphere_surface_area(10));

// setInterval(() => console.log(new Date().getSeconds()), 3000);



/***************************************************************************** */
// 块范围的函数
// function cylinder(r, h) {
//     function circle (r) {
//         var values = {};
//         values.area = Math.PI * r * r;
//         values.circumference = 2 * Math.PI * r;
//         return values;
//     }
//     var values = {}
//     values.circle = circle(r);
//     values.volume = values.circle.area * h;
//     values.surface_area = 2 * values.circle.area + values.circle.circumference * h;
//     return values;
// }
// let result = cylinder(12, 50);
// console.log(result.circle);  // { area: 452.3893421169302, circumference: 75.39822368615503 }
// console.log(result.volume);  // 22619.46710584651
// console.log(result.surface_area);  // 4674.689868541612



/***************************************************************************** */
// 参数列
// function profile(a01 = 'none', a02 = 'none', a03 = 'none', ...others) {
//     console.log(arguments);
//     /**
//      *  [Arguments] {
//         '0': 'name',
//         '1': 'gender',
//         '2': 'age',
//         '3': 'position',
//         '4': 'department' }
//      */
//     console.log(arguments.length);  // 5
//     console.log('');

//     console.log(arguments[0], arguments[1], arguments[2]);  // name gender age
//     console.log(a01, a02, a03);  // name gender age
//     console.log('');

//     console.log(others);  // [ 'position', 'department' ]
//     console.log(arguments[3], arguments[4]);  // position department
//     console.log(others[0], others[1]);  // position department
// }
// profile('name', 'gender', 'age', 'position', 'department');
// console.log('');

// profile();

// console.log('\n\n');
// let arg_list = ['model', 'name', 'color', 'weight', 'price'];
// profile(...arg_list);



/***************************************************************************** */
// 参数的默认数据
// function income(identity = 'company', currency = 'USD', days = 10, daily_income = 5000) {
//     let result = 0;
//     let monthly_income = days * daily_income;
//     monthly_income = Intl.NumberFormat().format(monthly_income);
//     result = `The ${identity}'s mothly income = ${monthly_income} ${currency}`;
//     console.log(result);
// }
// income();  // The company's mothly income = 50,000 USD
// income('Jasper');  // The Jasper's mothly income = 50,000 USD
// income('Paula', 'GBP');  // The Paula's mothly income = 50,000 GBP
// income('Eric', 'GBP', 31);  // The Eric's mothly income = 155,000 GBP
// income(undefined, 'RMB', undefined, 1000);  // The company's mothly income = 10,000 RMB



/***************************************************************************** */
// 参数的一般配对
// var item01 = {name: 'friut_set', price: 250};
// function display01(item) {
//     with (item)
//         message = `${name}'s price is ${price} dollars now.`;
//     return message;
// }
// function display02 ({name, price}) {
//     message = `${name}'s price is ${price} dollars now.`;
//     return message;
// }
// function display03 ({name: n, price: p}) {
//     message = `${n}'s price is ${p} dollars now.`;
//     return message;
// }
// console.log(display01(item01));  // friut_set's price is 250 dollars now.
// console.log(display02(item01));  // friut_set's price is 250 dollars now.
// console.log(display03(item01));  // friut_set's price is 250 dollars now.

// var item02 = ['bread_set', 120];
// function display04 ([name, price]) {
//     message = `${name}'s price is ${price} dollars now.`;
//     return message;
// }
// console.log(display04(item02));  // bread_set's price is 120 dollars now.



/***************************************************************************** */
// 参数的扩展配对
// function user_cart (id, name, ...items) {
//     let title = `User ${name} whose id is ${id}`;
//     console.log(title);  // User USA-TX-21532 whose id is Alex
//     console.log(items);
//     /**
//      *[ [ 'Red apple', 3 ],
//         [ 'Durian', 5 ],
//         [ 'Grapefruit', 13 ],
//         [ 'Watermelon', 21 ] ]
//      */
//     console.log('');
//     for (let i = 0; i < items.length; i++) {
//         let item_message = `item ${i}: Product = ${items[i][0]}, Amount = ${items[i][1]}`;
//         console.log(item_message);
//         /**
//         item 0: Product = Red apple, Amount = 3
//         item 1: Product = Durian, Amount = 5
//         item 2: Product = Grapefruit, Amount = 13
//         item 3: Product = Watermelon, Amount = 21
//          */
//     }
// }
// user_cart('Alex', 'USA-TX-21532', ['Red apple', 3], ['Durian', 5], ['Grapefruit', 13], ['Watermelon', 21]);



/***************************************************************************** */
// 返回数据与void关键字



/*********************************************************************** */
