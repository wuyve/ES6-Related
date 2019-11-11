<!-- TOC -->

- [DOM的事件处理（一）](#dom的事件处理一)
    - [鼠标事件](#鼠标事件)
        - [单击和双击事件](#单击和双击事件)
        - [上下文菜单事件](#上下文菜单事件)
        - [鼠标按下与松开事件](#鼠标按下与松开事件)
        - [鼠标指针相关进出事件](#鼠标指针相关进出事件)
        - [鼠标移动事件](#鼠标移动事件)
    - [键盘事件](#键盘事件)
        - [按压与按下事件](#按压与按下事件)
        - [松开按键事件](#松开按键事件)
    - [网页内容的装卸事件](#网页内容的装卸事件)
        - [出现错误事件](#出现错误事件)
        - [加载和页面显示事件](#加载和页面显示事件)
        - [卸载和页面隐藏事件](#卸载和页面隐藏事件)
        - [先于卸载事件](#先于卸载事件)
        - [网页散列变化事件](#网页散列变化事件)
        - [滚动事件](#滚动事件)
    - [表单事件](#表单事件)
        - [内容变化事件](#内容变化事件)
        - [获取和失去焦点](#获取和失去焦点)
        - [输入事件](#输入事件)
        - [无效事件](#无效事件)
        - [重置事件](#重置事件)
        - [搜索事件](#搜索事件)
        - [选定文本事件](#选定文本事件)
        - [提交事件](#提交事件)

<!-- /TOC -->

# DOM的事件处理（一）

文档对象模型（DOM）可将特定网页的内容，以改变树状结构来表示其在内容里各节点的片段。

## 鼠标事件 

### 单击和双击事件

```javascript
button1.onclick = function (event) {
    // 处理单击事件
};
button2.addEventListener('click', (event) => {
    // 处理单击事件
});

button3.ondbclick = (event) => {
    // 处理双击事件 
};
button4.addEventListener('dblclick', (event) =>{
    // 处理双击事件
})
```


### 上下文菜单事件

在特定网页中，用户按下鼠标右键或键盘上的菜单键（menu key）时，会发生右击/上下文菜单事件。

```javascript
let element = null;
function display_menu() {
    event.preventDefault();
    console.log('Document was right clicked');
}
document.addEventListener('contextmenu', display_menu);
```


### 鼠标按下与松开事件 

按下`mousedown`, 松开`mouseup`


### 鼠标指针相关进出事件

鼠标移入`mouseenter`, 鼠标悬停`mouseover`, 鼠标离开`mouseleave`, 鼠标脱出`mouseout`


### 鼠标移动事件

鼠标移动`mousemove`


## 键盘事件

键盘事件是指窗口的焦点进入指定网页之后，用户按下或松开键盘上任意的按键所发生的事件。

### 按压与按下事件

按压键盘事件`onkeypress`和按下键盘事件`onkeydown`的差异，在于按压按键事件仅来自于键盘上的字母键、数字键与符号键的动作；按下键盘事件则来自于几乎键盘上所有的按键。

### 松开按键事件

窗口的焦点进入特定网页之后，用户松开特定按键时，会发生松开按键事件`onkeyup`。


## 网页内容的装卸事件

特定网页的内容，因为被加载、卸载、隐藏、跳动或滚动时，均会发生装卸事件。

### 出现错误事件

在特定网页中，若代表图像的img元素实例，或内容JS源代码的script元素实例，出现加载或执行上的问题时，则会发生出现错误事件。

```javascript
let element = document.createElement('img');
element.src = 'http://www.xxx.cn/one_image.png';
element.style.display = 'block';
element.style.marginTop = '1em';
document.body.appendChild(element);
function display_message01(event) {
    console.log('The file is not found...');
}
function display_message02(event) {
    console.log('An exception is thrown...');
}
function expired() {
    throw new Error('Time is out...');
}
element.onerror = display_message01;
window.onerror = display_message02;
setTimeout(expired, 2000);
```


### 加载和页面显示事件

特定网页被加载完成时，会发生加载事件；若特定网页正式被显示于浏览器窗口中时，则会发生页面显示事件。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>整体页面的pageshow与load事件</title>
</head>
<body>
    <script>
        window.onload = () => console.log('This page has been loaded');
        window.onpageshow = () => console.log('This page shows up after being loaded');
        function display() {
            console.log('An image is loaded.');
        }
        let element = document.createElement('img');
        element.src = 'img/hansir01.jpg';
        element.style.display = 'block';
        element.style.marginTop = '10px';
        document.body.appendChild(element);
        element.onload = display;
    </script>
</body>
</html>
```


### 卸载和页面隐藏事件

特定网页被卸载完成时，会发生卸载事件；若特定网页已经被隐藏起来，则会发生页面隐藏事件。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>整体页面的pagehide与unload事件</title>
</head>
<body>
    <a href="http://www.yahoo.com">按此到新页面</a>
    <script>
        function display01(event) {
            console.log('This page is hidden!');
        }
        function display02(event) {
            console.log('This page is unloaded');
        }
        window.onpagehide = display01;
        window.onunload = display02;
    </script>
</body>
</html>
```


### 先于卸载事件

特定网页即将被卸载完毕之前，会发生先于卸载事件。

```javascript
let element = document.createElement('a');
element.href = 'http://www.tup.tsinghua.edu.cn';
element.innerHTML = 'Click here to another page.';
element.style.display = 'block';
element.style.marginTop = '1em';
document.body.appendChild(element);
function goodbye(event) {
    return 1;
}            
window.onbeforeunload = goodbye;
```


### 网页散列变化事件

在浏览器的地址栏中，特定网址在符号【#】右侧的锚点名称，被变更时，会发生网址散列变化事件。网址中的散列变化发生变化，主要是因为在浏览器窗口中，其画面跳转至网页里的特定锚点位置。

```javascript
console.log(location.href);
console.log(location.hash);

function change_hash() {
    location.hash = '#anchor01';
    console.log(location.href);
    console.log(location.hash);
}
function display_message() {
    console.log('Hash part in URL is changed');
}
setTimeout(change_hash, 2000);
window.onhashchange = display_message;
```


### 滚动事件

在特定网页中，若window对象实例、body元素实例或者其他子元素实例的内容，被滚动时，就会发生滚动事件。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>滚动事件</title>
    <style>
        body{
            width: 1500px;
            height: 1500px;
            background-image: url(img/hansir01.jpg);
        }
    </style>
</head>
<body>
    <script>
        function action01() {
            console.log('This page is scrolling');
        }
        window.onscroll = action01;
    </script>
</body>
</html>
```


## 表单事件

### 内容变化事件

`onchange`


### 获取和失去焦点

在特定form元素实例中，焦点移入`focusin`特定子元素实例时，会发生焦点移入事件；焦点移出`focusout`特定子元素实例时，则会发生失去焦点的模糊事件。

失去焦点事件`onblur`，获取焦点`onfocus`，焦点移入`focusin`，焦点移除`focusout`


### 输入事件

当用户输入特定文本到特定input或textarea元素实例中，会发生输入事件`oninput`。


### 无效事件

在网页的form元素实例中，任何被设置为必填(required)或其文本必须符合特定模式(pattern)的input元素实例的数据，被提交(subbmitted)时，若未被填入任何文本或者不符合特定模式，则会发生无效事件(oninvaild)。


### 重置事件

重置事件`onreset`


### 搜索事件

在网页里的form元素实例中，其属性type的数据为字符串'search'的input元素实例，被输入文本之后，被输入文本之后，被按下键盘上的ENTER键，或者单击input元素实例的右侧【X】形状的关闭按钮时，就会发生搜索事件(onsearch)。


### 选定文本事件

在网页里的input或textarea元素实例中，其内容的任何文本，被选定时，都会发生选定事件(onselect)。


### 提交事件

在网页里的form元素实例中，其数据被提交时，会发生提交事件(onsubmit)。
