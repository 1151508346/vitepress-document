# NodeJs中的vm模块详解

## 什么是vm？
VM模块是NodeJS里面的核心模块，支撑了require方法和NodeJS的运行机制，我们有些时候可能也要用到VM模板来做一些特殊的事情。

通过VM，JS可以被编译后立即执行或者编译保存下来稍后执行（JavaScript code can be compiled and run immediately or compiled, saved, and run later.）
VM模块包含了三个常用的方法，用于创建独立运行的沙箱体制，如下三个方法
vm.runInThisContext(code, filename);

此方法用于创建一个独立的沙箱运行空间，code内的代码可以访问外部的global对象，但是不能访问其他变量

而且code内部global与外部共享

## runInThisContext
```js
var vm = require("vm");
var p = 5;
global.p = 11;

vm.runInThisContext("console.log('ok', p)");// 显示global下的11
vm.runInThisContext("console.log(global)"); // 显示global
console.log(p);// 显示5
```


## runInContext
此方法用于创建一个独立的沙箱运行空间，sandBox将做为global的变量传入code内，但不存在global变量

sandBox要求是vm.createContext()方法创建的sandBox
```js
var vm = require("vm");
var window = {
    p: 2,
    vm: vm,
    console: console,
    require: require
};
var p = 5;
global.p = 11;
// sandbox 必须由createContext()方法创建出来的sandBox
// 此处的window作为sandbox，同时只能访问window下的属性
vm.createContext(window);
vm.runInContext('p = 3;console.log(typeof global);', window); // global是undefined
console.log(window.p);// 被改变为3
```
> vm.runInNewContext()方法应该和runInContext一样，但是少了创建sandBox的步骤

## 比较
![node_vm](./assets/../../assets/node/node_vm.png)

## 更为复杂的情形
如果runInContext里面执行runInThisContext会是怎么样，runInThisContext访问到的global对象是谁的？

```js
var vm = require("vm");
var util = require("util");
var window = {
    p: 2,
    vm: vm,
    console: console,
    require: require
};
window.global = window;
var p = 5;
global.p = 11;
vm.runInNewContext('p = 3;console.log(typeof global);require(\'vm\').runInThisContext("console.log(p)");', window);

```
> runInThisContext里面的代码可以访问外部的global对象,但外面实际上不存在global对象（虽然有，但本质不是global对象）,只要记住一点，runInThisContext只能访问最顶部的global对象就OK了

**执行结果如下**
```js
// object (global存在）
// 11 （顶部global的p)
```