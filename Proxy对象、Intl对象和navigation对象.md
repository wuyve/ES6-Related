# Proxy对象、Intl对象和navigation对象

<!-- TOC -->

- [Proxy对象、Intl对象和navigation对象](#proxy对象intl对象和navigation对象)
    - [proxy对象](#proxy对象)
    - [Intl对象](#intl对象)
        - [精确比较敏感的字符串](#精确比较敏感的字符串)
        - [语言敏感的日期与时间格式](#语言敏感的日期与时间格式)
        - [语言敏感的数值格式](#语言敏感的数值格式)
        - [返回规范化语言环境的名称](#返回规范化语言环境的名称)
    - [window.navigator对象](#windownavigator对象)
        - [获取浏览器相关信息](#获取浏览器相关信息)
        - [获取当前地理相关的数据](#获取当前地理相关的数据)

<!-- /TOC -->

## proxy对象

proxy对象主要用来改造对象实例的访问机制，成为新的访问代理机制，以便使用不存在的属性，被访问到时，或者超出范围的数据时，被赋予特定的值时；被改造之后的访问机制，可返回动态产生的数据。

```javascript
function  get_value(obj, attr) {
    let choice;
    choice = attr in obj ? obj[attr] : 'N/A';
    return choice;
}
function set_value(obj, attr, value) {
    let new_value;
    switch(attr) {
        case 'age':
            if(value > 150) {
                new_value = 'Impossible old...'
            }
            break;
        case 'gender':
            if(!(value in ['male', 'female'])) {
                new_value = 'Impossible gender';
                break;
            }
        default: 
            new_value = value;
    }    
    obj[attr] = new_value;
}
// 确定被代理的特定对象：运用Proxy对象的构造函数之前，必须确定欲被代理的对象实例
var cur_obj = {name: 'Daisy', gender: 'female', age: 30};
// 确定Proxy的getter成员和setter成员
var proxy_hander = {get: get_value, set: set_value};
var p01 = new Proxy(cur_obj, proxy_hander);
// 调试访问代理机制：为p01的proxy对象新增加属性和属性值
p01.department = 'finance';
p01.position = 'manager';

console.log(p01);
console.log(p01.name);
console.log(p01.position);
console.log(p01.company);
console.log(p01.salary);
console.log('');

var p02 = new Proxy(cur_obj, proxy_hander);
p02.age = 152;
p02.gender = 'unknown';

console.log(p02);
```

运行结果：

>Object [N/A] {
  name: 'Daisy',
  gender: 'female',
  age: 30,
  department: 'finance',
  position: 'manager' }

>Daisy

>manager

>N/A

>N/A

>Object [N/A] {
  name: 'Daisy',
  gender: 'Impossible gender',
  age: 'Impossible old...',
  department: 'finance',
  position: 'manager' }

 
## Intl对象

Intl对象实例的函数和属性，均有关于语言敏感的处理机制，包括字符串的比较、日期与时间的格式以及数字的格式。

### 精确比较敏感的字符串

```javascript
var list = ['z', 'α', 'a', 'ā', 'ā', 'ǎ', 'à'];
var collator = new Intl.Collator();
// 德文
var collator_de = new Intl.Collator('de');
// 瑞典文
var collator_sv = new Intl.Collator('sv');
console.log(collator_de.compare(list[4], list[0]));
console.log(collator_sv.compare(list[4], list[0]));
console.log(collator.compare(list[2], 'a'));

console.log(list.sort(collator.compare));
console.log(list.sort(collator_de.compare));
console.log(list.sort(collator_sv.compare));
```

运行结果：

>-1

>-1

>0

>[ 'a', 'à', 'ǎ', 'ā', 'ā', 'z', 'α' ]

>[ 'a', 'à', 'ǎ', 'ā', 'ā', 'z', 'α' ]

>[ 'a', 'à', 'ǎ', 'ā', 'ā', 'z', 'α' ]


### 语言敏感的日期与时间格式

通过构造函数`Intl.DateTimeFormat()`，可进一步获取语言敏感的特定格式的日期与时间。

```javascript
let special = new Date();
let result = new Intl.DateTimeFormat('en').format(special);
console.log(result);

let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'Asia/Shanghai'
};
result = new Intl.DateTimeFormat('zh', options).format(special);
console.log(result);
```

运行结果：

>11/2/2019

>2019-11-2 10:25:55 PM


### 语言敏感的数值格式

通过函数`Intl.NumberFormat()`，可进一步获取语言敏感的特定数值格式的字符串。

```javascript
let number = 35294.8;
let result = new Intl.NumberFormat('en').format(number);
console.log(result);
result = new Intl.NumberFormat('cn', {
    style: 'currency',
    currency: 'cny'
}).format(number);
console.log(result);
```

运行结果：

>35,294.8

>CN¥ 35,294.80


### 返回规范化语言环境的名称

通过函数`Intl.getCanonicalLocales()`，可进一步获取特定规范化语言环境名称。

```javascript
let local = Intl.getCanonicalLocales('zh-cn');
console.log(local);
local = Intl.getCanonicalLocales('en-us');
console.log(local);
local = Intl.getCanonicalLocales('en-uk');
console.log(local);
local = Intl.getCanonicalLocales('en-kk');
console.log(local);
```

运行结果：

>[ 'zh-CN' ]

>[ 'en-US' ]

>[ 'en-UK' ]

>[ 'en-KK' ]


## window.navigator对象

返回浏览器的相关情报或者当前地理位置的相关数据。

### 获取浏览器相关信息

```javascript
// cookieEnabled属性的值：若为true，则浏览器支持cookie机制，当前处于开启状态。
console.log(navigator.cookieEnabled);
// onLine属性的值，若为true，则浏览器当前处于在线状态，反之处于离线状态。
console.log(navigator.onLine);
// javaEnabled属性的值：若为true，则浏览器支持Java applet处理机制，当前处于开启状态。
console.log(navigator.javaEnabled);
// appCodeName返回浏览器的代码名称
console.log(navigator.appCodeName);
// appName返回浏览器的应用名称
console.log(navigator.appName);
// appVersion返回浏览器的应用版本
console.log(navigator.appVersion);
// userAgent返回浏览器的用户代理相关的数据。
console.log(navigator.userAgent);
// platform返回浏览器所在的操作平台的版本
console.log(navigator.platform);
// product返回浏览器的内核的产品名称
console.log(navigator.product);
console.log(navigator.language);
```


### 获取当前地理相关的数据

```javascript
let options = {
    maximumAge: 0,
    timeout: 7000,
    enableHighAccuracy: true
}
function succeed(position) {
    with(position.coords) {
        let message = `current location:\n\tLatitude = ${latitude}\n\tLongitude = ${longitude}\n\tdistance accuracy = ${accuracy}meters.`;
        console.log(message);
    }
}
function fail(error) {
    console.log(`S{error.code}: ${error.message}`);
}
navigator.geolocation.getCurrentPosition(succeed, fail, options);
```
