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
// message = '';

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