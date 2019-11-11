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
- [DOM的事件处理（二）](#dom的事件处理二)
    - [拖动事件](#拖动事件)
    - [剪贴板事件](#剪贴板事件)
    - [视频和音频事件](#视频和音频事件)
        - [加载相关事件](#加载相关事件)
        - [清空事件](#清空事件)
        - [播放结束事件](#播放结束事件)
        - [异常相关数据](#异常相关数据)
        - [播放与暂停相关事件](#播放与暂停相关事件)
        - [播放速率变化事件](#播放速率变化事件)
        - [播放位置变化相关事件](#播放位置变化相关事件)
        - [音量变化事件](#音量变化事件)
        - [等待缓冲事件](#等待缓冲事件)
    - [动画及过渡事件](#动画及过渡事件)
        - [动画相关事件](#动画相关事件)
        - [过渡结束事件](#过渡结束事件)
    - [其他事件](#其他事件)
        - [detail元素实例的切换事件](#detail元素实例的切换事件)
        - [鼠标滚轮事件](#鼠标滚轮事件)
        - [触摸相关事件](#触摸相关事件)
        - [接收服务器数据相关事件](#接收服务器数据相关事件)

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


#  DOM的事件处理（二）

## 拖动事件

正在拖动事件`ondrag`, 拖动结束事件`ondragend`, 拖动进入事件`ondragenter`, 拖动离开事件`ondragleave`, 拖动悬停事件`ondragover`, 拖动开始事件`dragstart`, 放下事件`ondrop`,


## 剪贴板事件

复制事件`oncopy`, 剪切事件`oncut`, 粘贴事件`onpaste`


## 视频和音频事件

### 加载相关事件

特定视频从远程服务器，被加载到 客户端的浏览器之前，会经过【开始进行加载`onloadstart`--》其持续时间发生变化`ondurationchange`--》其元数据被加载`onloadedmetadata`--》其主要数据开始被下载`onprogress`--》其第一帧被加载完成`onloadeddata`--》其数据充分被加载并可被播放`oncanplay`--》其数据被加载完成`oncanplaythrough`】等阶段。

### 清空事件

在特定网页里，特定video或audio元素实例所对应的视频或音频被清空时，会发生清空事件`onemptied`。

### 播放结束事件

播放结束事件`onended`

### 异常相关数据

发生错误`onerror`, 停滞`onstalled`, 突然被停止`onsuspend`

### 播放与暂停相关事件

暂停事件`onpause`, 播放事件`onplay`, 暂停后，重新播放`onplaying`

### 播放速率变化事件

播放速率变化事件`onratechange`

### 播放位置变化相关事件

被用户搜索时`onseeked`，被用户搜索的瞬间`onseeking`

### 音量变化事件

音量变化事件`onvolumechange`

### 等待缓冲事件

在特定网页中，特定video或audio元素实例对应的视频或音频，加载不完全而被等待下一帧的二进制数据时，会发生缓冲等待事件`onwaiting`


## 动画及过渡事件

在特定网页里的特定元素实例中，被设置的动画(animation)或过渡(transition)效果，在播放进程中，前后会发生动画或过渡效果的相关事件。

### 动画相关事件

特定元素实例被设置的动画，在其播放进程中，前后会发生动画开始`animationstart`、动画结束`animationend`和动画迭代`animationiteration`的事件。

### 过渡结束事件

特定元素实例被设置的过渡效果被播放到结束时，会发生过渡结束事件`transitionend`


## 其他事件

### detail元素实例的切换事件

在特定网页中，特定detail元素实例，被展开或折叠时，会发生切换事件`ontoggle`

### 鼠标滚轮事件

鼠标滚轮事件 `onwheel`

### 触摸相关事件

在触摸屏中的特定网页中，特定元素实例被触摸时，会发生触摸相关事件：触摸开始事件`ontouchstart`、触摸结束事件`ontouchend`、触摸移动事件`ontouchmove`、触摸撤销事件`ontouchcancel`。

### 接收服务器数据相关事件

在特定网页里的script元素实例中，可编写访问`EventSource`对象实例的源代码，让浏览器通过`EventSource`对象实例，创建【至特定网站服务器的特定网址】的连接，以便接受来自特定网站服务器的信息数据。

每次接收到来自特定网站服务器的信息数据时，都会发生接收服务器数据相关事件：例如错误事件`onerror`、接受信息事件`onmessage`和连接敞开事件`onopen`。
