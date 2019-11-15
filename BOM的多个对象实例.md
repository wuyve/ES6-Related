<!-- TOC -->

- [BOM的多个对象实例](#bom的多个对象实例)
    - [window对象实例](#window对象实例)
        - [显示多种对话框与搜索特定文本](#显示多种对话框与搜索特定文本)
        - [滚动至坐标或滚动特定距离](#滚动至坐标或滚动特定距离)
    - [screen对象实例](#screen对象实例)
    - [history对象实例](#history对象实例)
    - [location对象](#location对象)

<!-- /TOC -->

# BOM的多个对象实例

在浏览器对象模型（BOM）中，特定网页中的window对象实例，可被视为根对象实例。在window对象实例中，较常被运用的，有document、screen、history与location子对象实例。

## window对象实例

在JS中，window对象实例即是对应到容纳当前网页的浏览器窗口（window）。

### 显示多种对话框与搜索特定文本

通过函数`window.alert()`或`alert()`的调用，可在当前网页上，呈现警告对话框。

通过函数`window.confirm()`或`confirm()`的调用，可在当前网页上，呈现出显示确认对话框。

通过函数`window.prompt()`或`prompt()`的调用，可在当前网页上，呈现出提示对话框。

通过函数`window.open()`的调用，可使得浏览器打开内含另一网页的新窗口。

通过函数`window.find()`的调用，可在当前网页中，突出被搜寻到的文本。


### 滚动至坐标或滚动特定距离

通过函数`window.scrollTo()`或者`scrollTo()`的调用，可在当前网页的内容中，滚动至特定坐标。通过函数`window.scrollBy()`或`scrollBy()`的调用，可在当前网页的内容中，滚动特定距离。

```javascript
scrollTo(300, 500);  // 将当前网页的内容滚动到x轴300px，y轴500px的位置
scorllBy(20, 30);  // 向右滚动20px，向下滚动30px
```


## screen对象实例

`window.screen`对象实例，可被简写为`screen`对象实例，内涵当前设备屏幕的相关数据。

```javascript
console.log(screen.width);  // 返回当前设备的屏幕的宽度
console.log(screen.height);  // 返回当前设备的屏幕的高度
console.log(screen.availWidth);  // 返回当前浏览器窗口可被占用的宽度
console.log(screen.availHeight);  // 返回当前浏览器窗口可被占用的高度
console.log(screen.colorDepth);  // 返回当前设备的屏幕的颜色深度
console.log(screen.pixelDepth);  // 返回当前设备的屏幕的像素深度
```


## history对象实例

内涵当前浏览器窗口里，其用户浏览过的各网址的历史纪录。

`history.go(1);`  访问其history记录中的**下一个网页**；

`history.go(-1);`  访问其history记录中的**上一个网页**


## location对象

用来获取或设置浏览器窗口内的当前网页的网址。

|属性/方法|描述|
|:---|:---|
|location.protocol|返回当前网页的网址中的协议代号字符串|
|location.hostname|返回当前网页的网址中的主机名称|
|location.port|返回当前网页的网址中的端口号|
|location.pathname|返回当前网页的网址中的路径名称|
|location.href|返回当前网页的网址中的完整网址|
