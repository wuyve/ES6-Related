<!-- TOC -->

- [Reflect对象](#reflect对象)
    - [Reflect对象介绍](#reflect对象介绍)
    - [间接应用特定函数](#间接应用特定函数)
    - [创建特定对象的实例](#创建特定对象的实例)
    - [精细定义新属性](#精细定义新属性)
    - [删除特定属性](#删除特定属性)
    - [获取特定属性的数据](#获取特定属性的数据)
    - [返回特定属性的描述器](#返回特定属性的描述器)
    - [返回特定对象的原型](#返回特定对象的原型)
    - [判断特定属性的存在性](#判断特定属性的存在性)
    - [判断与设置特定对象的扩展性](#判断与设置特定对象的扩展性)
    - [简易定义新属性](#简易定义新属性)
    - [重新设置特定对象的原型](#重新设置特定对象的原型)
    - [返回与列举特定对象的自定义属性](#返回与列举特定对象的自定义属性)

<!-- /TOC -->

# Reflect对象

## Reflect对象介绍

Reflect对象的内置函数，可用来替代或简化【访问Object对象实例的属性】的相关语法。

```javascript
let candy_amout = {
    durian: 30,
    strawberry: 55,
    cranberry: 10,
    blueberry: 13,
    cherry: 60,
    origin: 18,
    lemon: 10
};
Object.defineProperty(candy_amout, 'apple', {
    value: 17,
    writable: true,
    enumerable: true,
    configurable: true
});
candy_amout.watermelon = 33;
let symbol01 = Symbol('mixed');
candy_amout[symbol01] = 5;
console.log(Reflect.ownKeys(candy_amout));

console.log(candy_amout.origin);
console.log(candy_amout.watermelon);
console.log(candy_amout.mixed);
console.log(candy_amout['mixed']);
console.log(candy_amout[symbol01]);
```

运行结果：

>[ 'durian',
  'strawberry',
  'cranberry',
  'blueberry',
  'cherry',
  'origin',
  'lemon',
  'apple',
  'watermelon',
  Symbol(mixed) ]

>18

>33

>undefined

>undefined

>5


## 间接应用特定函数

通过函数`Reflect.apply()`可传入多个数据，至即将被间接应用的其他函数。

```javascript
let code_list = [108, 111, 118, 101, 32, 121, 111, 117];
result = String.fromCharCode(...code_list);
console.log(result);

result = Reflect.apply(String.fromCharCode, undefined, code_list);
console.log(result);

let pointer = null;
let  rang_list = [10, 10, 10, 50, 50, 50, 100, 100, 100];
function generate(...list) {
    let number_list = [];
    console.log(this.valueOf());
    for(let i = 0; i < list.length; i++) {
        number_list.push(parseInt(list[i] * Math.random()));
    }
    return number_list;
}
result = Reflect.apply(generate, 'test message', rang_list);
console.log(result);
```

运行结果：

>love you

>love you

>test message

>[ 9, 1, 6, 41, 15, 25, 22, 62, 52 ]


## 创建特定对象的实例

通过函数`Reflect.construct()`，可传入多个数据，至即将被间接调用的其他对象的构造函数中，进而创建特定对象的新实例。

```javascript
let a01 = new Array(7);
let a02 = Reflect.construct(Array, [7]);
console.log(a01);
console.log(a02);

let d01 = new Date();
let d02 = Reflect.construct(Date, []);
console.log(d01);
console.log(d02);

let n01 = new Number(2598.1);
let n02 = Reflect.construct(Number, [2598.1]);
console.log(n01);
console.log(n02);
```

运行结果：

>[ <7 empty items> ]

>[ <7 empty items> ]

>2019-11-03T05:34:39.816Z

>2019-11-03T05:34:39.816Z

>[Number: 2598.1]

>[Number: 2598.1]


## 精细定义新属性

通过函数`Reflect.defineProperty()`，可间接对特定对象的实例，精细定义其属性及其特征。

```javascript
let obj01 = {}, obj02 = {};
let result01 = null, result02 = null;
result01 = Object.defineProperty(obj01, 'name', {
    value: 'Alex',
    writable: true,
    enumerable: true,
    configurable: true
});
result02 = Reflect.defineProperty(obj02, 'name', {
    value: 'Alex',
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(obj01);
console.log(obj02);
console.log(result01);
console.log(result02);
```

运行结果：

>{ name: 'Alex' }

>{ name: 'Alex' }

>{ name: 'Alex' }

>true


## 删除特定属性

通过函数`Reflect.deleteProperty()`，可间接删除特定对象实例的特定属性。

```javascript
let inventory = {
    apple: 10,
    banana: 18,
    durian: 8,
    grapefruit: 30
};
let result = null;
result = delete inventory.apple;
console.log(result);

result = Reflect.deleteProperty(inventory, 'grapefruit');
console.log(result);
console.log(inventory);
```

运行结果：

>true

>true

>{ banana: 18, durian: 8 }


## 获取特定属性的数据

通过函数`Reflect.get()`，可间接获取特定对象实例中的特定属性的数据。

```javascript
let inventory = {
    apple: 10,
    banana: 18,
    durian: 8,
    grapefruit: 30
};
let result = inventory.banana;
console.log(result);

result = Reflect.get(inventory, 'grapefruit');
console.log(result);
```

运行结果：

>18

>30


## 返回特定属性的描述器

通过函数`Reflect.getOwnPropertyDescriptor()`，可间接返回特定对象实例的特定属性的描述器。

```javascript
let profile = {
    firstname: 'Jason',
    lastname: 'Alex',
    gender: 'male',
    age: 28,
    position: 'Product Manager',
    fullname01() {
        return this.firstname + ' ' + this.lastname;
    },
    get fullname02() {
        return this.firstname + ' ' + this.lastname;
    }
};
let d01 = Object.getOwnPropertyDescriptor(profile, 'position');
let d02 = Object.getOwnPropertyDescriptor(profile, 'fullname01');
let d03 = Object.getOwnPropertyDescriptor(profile, 'fullname02');
console.log(d01);
console.log(d02);
console.log(d03);

console.log(profile.fullname01());
console.log(profile.fullname02);

d01 = Reflect.getOwnPropertyDescriptor(profile, 'position');
d02 = Reflect.getOwnPropertyDescriptor(profile, 'fullname01');
d03 = Reflect.getOwnPropertyDescriptor(profile, 'fullname02');
console.log(d01);
console.log(d02);
console.log(d03);

let d04 = Object.getOwnPropertyDescriptor(profile);
console.log(d04);
```

运行结果：

>{ value: 'Product Manager',
  writable: true,
  enumerable: true,
  configurable: true }

>{ value: [Function: fullname01],
  writable: true,
  enumerable: true,
  configurable: true }

>{ get: [Function: get fullname02],
  set: undefined,
  enumerable: true,
  configurable: true }

>Jason Alex

>Jason Alex

>{ value: 'Product Manager',
  writable: true,
  enumerable: true,
  configurable: true }

>{ value: [Function: fullname01],
  writable: true,
  enumerable: true,
  configurable: true }

>{ get: [Function: get fullname02],
  set: undefined,
  enumerable: true,
  configurable: true }

>undefined


## 返回特定对象的原型

通过函数`Reflect.getPrototypeOf()`,可返回特定对象的原型。

```javascript
let profile = {
    firstname: 'Jason',
    lastname: 'Alex',
    gender: 'male',
    age: 28,
    position: 'Product Manager',
    fullname01() {
        return this.firstname + ' ' + this.lastname;
    },
    get fullname02() {
        return this.firstname + ' ' + this.lastname;
    }
};
let d01 = Object.getPrototypeOf(profile);
let d02 = Reflect.getPrototypeOf(profile);
console.log(d01);
console.log(d02);
console.log(d01 == d02)
```

运行结果：

>{}

>{}

>true


## 判断特定属性的存在性 

通过函数`Reflect.has()`，可判断特定对象实例，是否存在特定名称的成员（属性、函数、getter和setter）。

```javascript
let profile = {
    firstname: 'Jason',
    lastname: 'Alex',
    gender: 'male',
    age: 28,
    position: 'Product Manager',
    fullname01() {
        return this.firstname + ' ' + this.lastname;
    },
    get fullname02() {
        return this.firstname + ' ' + this.lastname;
    }
};
let d01 = Reflect.has(profile, 'age');
console.log(d01);
let d02 = Reflect.has(profile, 'fullname02');
console.log(d02);
let d03 = Reflect.has(profile, 'fullname03')
console.log(d03);
```

运行结果：

>true

>true

>false


## 判断与设置特定对象的扩展性

通过函数`Reflect.isExtensible()`，可判断特定对象实例，是否可被扩展新的属性；通过函数`Reflect.preventExtensions()`，可制止特定对象实例被扩展新的属性。

```javascript
let profile = {
    firstname: 'Jason',
    lastname: 'Alex',
    gender: 'male',
    age: 28,
    position: 'Product Manager',
    fullname01() {
        return this.firstname + ' ' + this.lastname;
    },
    get fullname02() {
        return this.firstname + ' ' + this.lastname;
    }
};
let d01 = Reflect.isExtensible(profile);
console.log(d01);
Reflect.preventExtensions(profile);
let d02 = Object.isExtensible(profile);
console.log(d02);
profile.department = 'Production';
console.log(profile);
```

运行结果：

>true

>false

>{ firstname: 'Jason',
  lastname: 'Alex',
  gender: 'male',
  age: 28,
  position: 'Product Manager',
  fullname01: [Function: fullname01],
  fullname02: [Getter] }


## 简易定义新属性

通过函数`Reflect.set()`，可间接在特定对象实例中，简易定义其新属性。

```javascript
let shapes = {};
shapes['diamond'] = 4;
shapes.parallelogram = 4;
Reflect.deleteProperty(shapes, 'trapezoid', {
    value: 4,
    writable: true,
    enumerable: true,
    configurable: true
});
Reflect.set(shapes, 'square', 4);
Reflect.set(shapes, 'triangle', 3);
console.log(shapes);
let metals = ['Zinc'];
metals.push('Silver');
metals.unshift('Gold');
metals[3] = 'Copper';
metals.splice(1, 2, 'Iron', 'Tin');
Reflect.set(metals, 4, 'Aluminum');
console.log(metals);
Reflect.set(metals, 'length', 10);
console.log(metals);
```

运行结果：

>{ diamond: 4, parallelogram: 4, square: 4, triangle: 3 }

>[ 'Gold', 'Iron', 'Tin', 'Copper', 'Aluminum' ]

>[ 'Gold', 'Iron', 'Tin', 'Copper', 'Aluminum', <5 empty items> ]


## 重新设置特定对象的原型

通过函数`Reflect.setPrototypeOf()`,可重新将特定对象实例的原型，设置为另一个对象实例。

```javascript
let book01 = {
    title: 'new thoughts',
    price: 50,
    anthor: 'Brat Terminator',
    Publisher: 'Tsinghua',
    date: '2018/06/06'
};
let book02 = {
    title: 'new thinkings',
    price: 180,
    anthor: 'Brat Terminator',
    Publisher: 'Tsinghua',
    date: '2018/06/06',
    version: 3
};
let result = Object.setPrototypeOf(book01, String);
console.log(result);
console.log(book01);

result = Reflect.setPrototypeOf(book02, Number);
console.log(result);
console.log(book02);
```

运行结果：

>Function {
  title: 'new thoughts',
  price: 50,
  anthor: 'Brat Terminator',
  Publisher: 'Tsinghua',
  date: '2018/06/06' }

>Function {
  title: 'new thoughts',
  price: 50,
  anthor: 'Brat Terminator',
  Publisher: 'Tsinghua',
  date: '2018/06/06' }

>true

>Function {
  title: 'new thinkings',
  price: 180,
  anthor: 'Brat Terminator',
  Publisher: 'Tsinghua',
  date: '2018/06/06',
  version: 3 }


## 返回与列举特定对象的自定义属性

通过函数`Reflect.ownKeys()`，可返回特定对象实例的自定义属性所构成的数组实例，进而搭配循环语句。

```javascript
let profile = {
    firstname: 'Jason',
    lastname: 'Alex',
    gender: 'male',
    age: 28,
    position: 'Product Manager',
    fullname01() {
        return this.firstname + ' ' + this.lastname;
    },
    get fullname02() {
        return this.firstname + ' ' + this.lastname;
    }
};
let result = Reflect.ownKeys(profile);
console.log(result);
```

运行结果：

>[ 'firstname',
  'lastname',
  'gender',
  'age',
  'position',
  'fullname01',
  'fullname02' ]
