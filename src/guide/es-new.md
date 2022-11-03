# ES6-ES12 所有特性详解

## 第一章 ECMASript 相关介绍

1.1、什么是 ECMA
ECMA（European Computer Manufacturers Association）中文名称为欧洲计算机制造商协会，这个组织的目标是评估、开发和认可电信和计算机标准。1994 年后该组织改名为 Ecma 国际。

1.2、什么是 ECMAScript
ECMAScript 是由 Ecma 国际通过 ECMA-262 标准化的脚本程序设计语言。

1.3、什么是 ECMA-262
Ecma 国际制定了许多标准，而 ECMA-262 只是其中的一个，所有标准列表查看

http://www.ecma-international.org/publications/standards/Standard.htm

1.4、ECMA-262 历史
ECMA-262（ECMAScript）历史版本查看网址

http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm

|          |      |                                                               |
| -------- | ---- | ------------------------------------------------------------- |
| 第 1 版  | 1997 | 制定了语言的基本语法                                          |
| 第 2 版  | 1998 | 较小改动                                                      |
| 第 3 版  | 1999 | 正则、异常处理、格式化输出                                    |
| 第 4 版  | 2007 | 过于激进、未发布                                              |
| 第 5 版  | 2009 | 严格模式、JSON、扩展对象、数组、原型、字符串、日期方法        |
| 第 6 版  | 2015 | 模块化、面向对象语法、箭头函数、Promise、let、const、解构赋值 |
| 第 7 版  | 2016 | 幂运算、includes、Async/await 关键字                          |
| 第 8 版  | 2017 | Async/await、字符串扩展                                       |
| 第 9 版  | 2018 | 对象解构赋值、正则扩展                                        |
| 第 10 版 | 2019 | 扩展对象、数组方法                                            |
| 第 11 版 | 2020 | 空值处理、可选链、BigInt                                      |
| 第 12 版 | 2021 | replaceAll、数字分隔符、weakRef                               |

1.5、谁在维护 ECMA-262
TC39（Technical Committee39）是推进 ECMAScript 发展的委员会。其会员都是公司（其中主要是浏览器厂商，有苹果、谷歌、微软、因特尔等）。TC39 定期召开会议，会议由会员公司的代表与特邀专家出席

1.6、为什么要学习 ES6
ES6 的版本变动内容最多，具有里程碑意义;

ES6 加入许多新的语法特性，编程实现更简单、高效;

ES6 是前端发展趋势，就业必备技能;

1.7、ES6 兼容性
http://kangax.github.io/compat-table/es6/ 可查看兼容性

## 第二章 ES6 特性=ES2015

2.1、let
作用：声明变量；

特点：不能重复声明；块级作用域 全局、函数、eva1 {}，出了块不被承认；不存在变量提升(先定义再使用)；

不影响作用域链；for 循环里很适合 let， for(let i=0;i<arr.length;i++）

```js
console.log(song); //不存在变量提升
let song = "ddd";
{
  //不影响作用域链
  let school = "sxlg";
  function fn() {
    console.log(school);
  }
}
fn();
```

2.2、const
作用：声明常量；数组和对象的定义一般使用 const

特点：要赋初始值；一般常量使用大写；常量的值不能修改；块儿级作用域；对于数组和对象的元素修改，不算做对常量的修改，不会报错

```js
const TEAM = ["uzi", "MXLG", "Ming", "lETME"];
TEAM.push("mEIKO");
```

2.3、变量的解构赋值
ES6 允许按照一定模式从数组和对象中提取值，对变量进行赋值

```js
//数组的结构
const F4 = ["小沈阳", "赵四", "刘能", "宋小宝"];
let [xiao, zhao, liu, song] = F4;
//对象的解构
const zhao = {
  name: "赵本山",
  xiaopin: function () {
    console.log("我可以演小品");
  },
};
let { name, xiaopin } = zhao;
//es6允许给函数参数传初始值，与解构赋值连用
connect({ port: 111, url: "./src", name: "cs" });
function connect({ port = 1002, url, name }) {
  console.log(port, url, name);
} //若port未传参，使用初始值
```

2.4、模板字符串
ES6 引入新的声明字符串的方式[``]‘’ “”

```js
//声明
let str = `字符串的一种形式${name}`;
//内容中可以直接出现换行符
let str = `<ul>
    <li>沈腾</li>
    </ul>`;
//变量拼接
let lovest = "魏翔";
let out = `${lovest}是我心目中最搞笑的演员`;
```

2.5、简化对象写法
ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法

```js
//这样的书写更加简洁
let name = "尚硅谷";
let change = function () {
  console.log("我们可以改变你");
};
const school = {
  name, //name:name
  change,
  improve() {
    console.log("我可以提高技能");
  },
};
```

2.6、箭头函数
注：由 Vue 管理的函数，一定不要写箭头函数，一旦写了箭头函数，this 不指向 Vue 实例，而是指向 window；

不能作为构造函数实例化对象；

箭头函数里不能使用 arguments 变量

```js
//不能作为构造函数实例化对象
let Person = (name, age) => {
  //错误写法
  this.name = name;
  this.age = age;
};
//不能使用arguments变量
let fn = () => {
  console.log(arguments);
}; //错误写法
//箭头函数的简写
let add = (n) => {
  // 省略小括号，当形参有且只有一个的时候
  return n + n;
};
let pow = (n) => n * n; //省略{},当代码体只有一条语句的时候,此时return也必须省略
//箭头函数的this指向外层函数的this
```

2.7、rest 参数
es6 引入 rest 参数，用于获取函数的实参，用来代替 arguments

```js
//es5获取实参
function date() {
  console.log(arguments);
} //Arguments(3);得到的是对象
date("bb", "s", "4");
//es6获取实参
function rest_date(a, b, c, ...rests) {
  //有多个参数时，rest参数必需放到参数的最后面
  console.log(a, b, c, rests); //qw we e (3) ['ee', '2', '4'] ;得到的是数组，使用数组的方法操作数据
}
rest_date("qw", "we", "e", "ee", "2", "4");
```

2.8、扩展运算符
… 扩展运算符 spread，能将数组转换成用逗号分隔的序列

应用：1、数组的合并；2、数组的克隆；3、将伪数组转为真正的数组

```js
const arr = ['w','e','r',1]
function xulie() {console.log(arguments)}
xulie(...arr)   //['w', 'e', 'r', 1]
//应用
const arr1= ['1','2','3'];const arr2 = ['w','e','t']
arr1.concat(arr2)   //es5的合并
[...arr1,...arr2]    //使用扩展运算符合并
const clone =[ ...arr1]  //数组的克隆
let divs = document.querySelectorAll('div')；const divsArr = [...divs]  //将伪数组转为真正数组
```

2.9、Symbol
ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 Javascript 的第七种数据类型，是一种类似于字符串的数据类型。

特点：

1）Symbol 的值是唯一的，用来解决命名冲突的问题

2）Symbol 值不能与其他数据进行运算

3）Symbol 定义的对象属性不能使用 for…in 循环遍历，但是可以使用 Reflect.ownkeys 来获取对象的所有键名

```js
let s = Symbol('wwww')   //创建symbol
let s1 = Symbol('ww')；let s2 = Symbol('ww')
console.log(s1 === s2)   //false
```

Symbol 的方法：

```js
//Symbol.for()    //使用symbol.for创建，创建的结果是一致的
let s4 = Symbol.for('www')；let s5 = Symbol.for('www')
console.log(s4 === s5)   //true
//Symbol.keyFor()
 var globalSym = Symbol.for("foo");   // 创建一个 symbol 并放入 Symbol 注册表，key 为 "foo"
 Symbol.keyFor(globalSym); // "foo"
```

Symbol 的属性：

Symbol.prototype.description：description 是一个只读属性，它会返回 Symbol 对象的可选描述的字符串。

```js
// Symbol()定义的数据
let a = Symbol("acc");
a.description; // "acc"
Symbol.keyFor(a); // undefined
// Symbol.for()定义的数据
let a1 = Symbol.for("acc");
a1.description; // "acc"
Symbol.keyFor(a1); // acc
// 未指定描述的数据
let a2 = Symbol();
a2.description; // undefined
```

Symbol 内置值

除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 symbol 值， 指向语言内部使用的方法。可以称这些方法为魔术方法，因为它们会在特定的场景下自动执行。

| Symbol.hasInstance | 当其他对象使用 instanceof 运算符，判断是否为该对象的实例时，会调用这个方法 | Symbol.isConcatSpreadable | 对象的 Symbol.isConcatSpreadable 属性等于的是一个布尔值，表示该对象用于 Array.prototype.concat()时，是否可以展开。 |
| ------------------ | -------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
|Symbol.species |创建衍生对象时，会使用该属性 |Symbol.match |当执行 str.match(myObject) 时，如果该属性存在，会调用它，返回该方法的返回值。|
|Symbol.replace |当该对象被 str.replace(myObject)方法调用时，会返回该方法的返回值。 |Symbol.search 当该对象被 str. search (myObject)方法调用时，会返回该方法的返回值。|
|Symbol.split| 当该对象被 str. split (myObject)方法调用时，会返回该方法的返回值。| Symbol.iterator |对象进行 for…of 循环时，会调用 Symbol.iterator 方法，返回该对象的默认遍历|器
|Symbol.toPrimitive |该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。| Symbol. toStringTag 在该对象上面调用 toString 方法时，返回该方法的返回值|
|Symbol. unscopables |该对象指定了使用 with 关键字时，哪些属性会被 with 环境排除。||

2.10、迭代器
迭代器（lterator）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口(对象的属性：Symbol.iterator)，就可以完成遍历操作。

1）ES6创造了一种新的遍历命令for…of循环，lterator接口主要供for…of消费；

2）原生具备iterator 接口的数据（可用for of遍历）：Array 、Arguments、Set、Map、String、TypedArray、NodeList

3）工作原理

a）创建一个指针对象，指向当前数据结构的起始位置

b）第一次调用对象的next方法，指针自动指向数据结构的第一个成员

c）接下来不断调用next方法，指针一直往后移动，直到指向最后一个成员

d)每调用next方法返回一个包含value和done属性的对象

注：需要自定义遍历数据的时，要想到迭代器

应用：for…in;for…of
```js
let arr = ['2',1,45,'ff']
for (let v of arr){ console.log(v) }    //for ...of 循环保存的是键值,'2',1,45,'ff'
for (let s in arr){console.log(s)}    //for ... in 循环保存的是键名,0,1,2,3
```
实现自定义遍历数组
```js
const banji = {
  name:'一班',
  xingming:['w','e','r','t'],
  [Symbol.iterator](){
    let index = 0
    return{
      next:()=>{
        if(index < this.xingming.length){
          const result = {value:this.xingming[index],done:false};
          index++;
          return result
        }else{return {value:undefined,done:true}}
      }}}}
for(let b of banji){ console.log(b)}  //实现对象内数组的遍历
```

2.11、生成器
生成器函数是E56提供的一种异步编程解决方案，语法与传统函数完全不同
```js
function *fun() {
  yield 'ww';     //yiels ：函数代码的分隔符
  yield 'ee';
  yield 'tt';
}
let interator = fun()
interator.next()  //必须调用next方法
```
生成器函数参数传递

```js
function * fun1(arg) {
  console.log(arg)   //sss,fun1('sss')传入的值
  let one = yield 11;
  console.log('one',one)   //aa,返回的是inter.next('aa')传入的值
  yield 22;
  yield 33;
}
let inter = fun1('sss')
console.log(inter.next('aa'))
```

异步编程简单实例

案例：1s后输出111；2s后输出222
```js
function  one() {
    setTimeout(()=>{
      console.log(111)；iter.next()
    },1000)
}
function  two() {
  setTimeout(()=>{
    console.log(222);iter.next()
  },2000)
}
function * gen(){
    yield one(); yield two();
}
let iter = gen();iter.next()
```
2.12、proxy与reject
proxy是代理，起到拦截的作用,Reflect是获取操作
通过为 get/set一个属性 设置"陷阱"（函数处理器）让我们可以拦截对于对象属性的操作
```js
var star = {
  name:'wl',
  age:23,
  num:33333
}
const proxy = new Proxy(star,{
  get:function (target, p, receiver) {
    if(p === 'num'){
      console.log('是num')
    }else{
      return Reflect.get(target,p,receiver)
    }
    console.log('pew',target,p,receiver)
  },
  set:function () {
  }
})
//例子
var arr = [1,2,3,4,5]
function createAray(arr) {
  let handle = {
    get(target,index,receiver){
      index = Number(index);
      if(index < 0){
        index += target.length
      }
      return Reflect.get(target,index,receiver)
    }
  }
  return new Proxy(arr,handle)
}
arr = createAray(arr)
console.log(arr[-1])   //4
```
2.13、Promise
Promise是ES6引入的异步编程（文件操作、网络Ajax,request、数据库操作）的新解决方案。语法上Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。

Promise 构造函数：Promise（excutor）{}
Promise.prototype.then方法
Promise.prototype.catch方法

Promise基本使用

```js
const p = new  Promise(function (resolve,reject) {
  setTimeout(()=>{
    /*let data = '数据库数据';  resolve(data)*/
    let error = '失败';reject(error)
  },1000)
})
p.then(function (value) {console.log(value)  //成功的返回值  },
  function (reason) {  console.error(reason)  //失败的返回值})
  //调用then的返回结果，then方法的返回结果是promise，对象状态由返回的结果确定；如果回调函数中返回的结果是 非promise类型的属性，状态为成功，返回值为对象的成功值
  p.then(value=>{},reason=>{}).then(value=>{},reason=>{})
  p.catch(function(reason){console.error(reason)})
```
2.14、Set
ES6提供了新的数据结构Set（集合），它类似于数组，值是唯一的，集合实现了iterator接口，可以使用[扩展运算…]和[for.of.]进行遍历;

集合的属性和方法：

1）size 返回集合的元素个数

2）add增加一个新元素，返回当前集合

3）delete 删除元素，返回boolean值

4）has检测集合中是否包含某个元素，返回boolean值

clear():清空
```js
let arr = ['1','3','3','5','1'];    let arr1 = ['3','3','4']
let result = [...new Set(arr)];   //去重 ['1', '3', '5']
let jiaoji = [...new Set(arr)].filter(item=> new Set(arr1).has(item))   //set交集   ['3']
let bing = [...new Set([...arr,...arr1])]    //set并集  ['1', '3', '5', '4'] 
let jiaoji = [...new Set(arr)].filter(item=> !new Set(arr1).has(item))   //set差集   ['1', '5']
```

2.15、Map
ES6提供了Map数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map也实现了iterator接口，

可以使用[扩展运算符…]和[for.of.]进行遍历。

Map的属性和方法：

1）size： 返回Map的元素个数

2）set： 增加一个新元素，返回当前Map

3）delete： 删除元素

4）get： 返回键名对象的键值

5）has： 检测Map中是否包含某个元素，返回boolean值

6）clear： 清空集合，返回undefined
```js
let map = new Map();
map.set('change',function () {}); //添加
let key = {school:'cc'};map.set(key,["电子","通信","计算机"]);  //添加
map.delete('sex');  //删除键为sex的元素
map.get('name');    //获取
map.has('change');  //检查是否有键为changed 的元素
for (let i of map){ console.log(i)}    //遍历集合
map.clear();        //清除集合元素
``` 
2.16、class类
ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，

它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

知识点：

1）class 声明类

2）constructor定义构造函数初始化

3）extends继承父类

4）super 调用父级构造方法

5）static定义静态方法和属性

6）父类方法可以重写
```js
class Phone{
    constructor(brand,price){   //构造方法
        this.brand=brand;
        this.price=price;    
    }
    call(){   console.log('微可以打电话了') }          //方法               
}
let onePlus=new Phone("1+",1999)
```
2.17、数值扩展
Number.EPSILON：是js表示的最小精度，属性值接近于2.220336E-16

二进制和八进制表示

Number.isFinite：检测一个数值是否为有限数

Number.isNaN ：检测一个数值是否为NaN

Number.parseInt, Number.parseF1oat：字符串转整数

Number.isInteger：判断一个数是否为整数

Math.trunc ：将数字的小数部分抹掉

Math.sigh ：判断一个数到底为正数、负数、0

```js
(0.1-0.1) < Number.EPSILON
0b1000 //2进制;	0o777//8进制;	 100 //10进制;	0xff//16进制
Number.isFinite(100/0)  //false 检测一个数值是否为有限数
Number.isFinite(Infinity)   //false
Number.isNaN(12)    //false  检测一个数值是否为NaN
Number.parseInt('23wefrewr23435')	//23 字符串转整数
Number.parseFloat('23.435346wefrewr23435')   //23.435346
Number.isInteger(44)   //判断一个数是否为整数
Math.trunc(55.44)    //55   将数字的小数部分抹掉
Math.sign(-22);Math.sign(22)Math.sign(0)   //-1,1,0; 判断一个数到底为正数、负数、0
```
2.18、对象方法扩展
对象的扩展运算符…将参数对象中的所有可遍历属性，拷贝到当前对象中

object.is ：判断两个值是否完全相等

object.assign：对象的合并

object.setPrototypeof、object.getPrototypeof：设置/获取原型对象

Object.is(12,12)   //true 类似于===
Object.is(NaN,NaN)   //true ;NaN === NaN//false  
const obj1 = {name:'2',age:3}
const obj2 = {gender:'男'}
Object.assign(obj1,obj2)   //合并对象
const obj3 = {name:'2',}
const obj4 = {city:['xa','bj']}
Object.setPrototypeOf(obj3,obj4)    //设置原型对象
Object.getPrototypeOf(obj3)         //获取原型对象
2.19、模块化
模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来。

优点：

1）防止命名冲突刻

2）代码复用

3）高维护性

ES6之前的模块化有：

1）CommonJS=>NodeJS、Browserify

2）AMD=>requireJS

3）CMD=>seaJS

ES6模块化语法

模块功能主要由两个命令构成：export和import。

export：规定模块的对外接口

import：输入其他模块提供的功能
```js
export default{}   //默认暴露，还有分别暴露、统一暴露
import * as xx from "../xx/xx"	//引入文件如果有重名，使用别名 ：school as xuexiao
<script src="./xx/x" type="module"></script>   //src标签引入
module.exports = {   //babel.config.js;实际开发中用babel转换，安装工具babel-cli babel-preset-env browserify（webpack）
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
```


## 第三章 ES7特性=ES2016
3.1、Array.prototype.includes
数组的Includes(): 用来检测数组中是否包含某个元素，返回true/false

字符串也有includes方法

3.2、指数操作符 **幂
指数运算符[**]，用来实现幂运算，功能与Math.pow结果相同,
```js
let arr = [1,2,3,3];arr.includes(1)   //true
let a= '23443';a.includes(8)   /false
2**3 = Math.pow(2,3)  =8  
```

## 第四章 ES8特性=ES2017
4.1、async 和await

async和await两种语法结合可以让异步代码像同步代码一样

async函数

1、async函数的返回值为promise对象，

2、promise对象的结果由async函数执行的返回值决定

await表达式

1、await必须写在async函数中

2、await右侧的表达式一般为promise对象

3、await 返回的是promise成功的值

4、await的promise失败了，就会抛出异常，需要通过try…catch 捕获处理
```js
4.2、 0bject.values、Object.keys、Object.entries
const schoool = {
  name:'ww',
  city:['w','e','r'],
  xueke:['1','2'],
}
Object.values(schoool)  //['ww', Array(3), Array(2)],返回对象的所有属性的值的数组
Object.keys(school)  //['name', 'city', 'xueke']  ,返回对象所有属性的属性名，数组    
Object.entries(school) //返回对象自身可遍历属性[key，value]的数组,返回的值可创建Map
const m = new Map(Object.entries(schoool))   // {'name' => 'ww', 'city' => Array(3), 'xueke' => Array(2)} (2) ['1', '2']
```
4.3、 Object.getOwnPropertyDescriptors()
该方法返回指定对象所有自身属性的描述对象:

Object.getOwnPropertyDescriptors(schoool)   //{name: {…}, city: {…}, xueke: {…}}
1
第五章 ES9特性= ES2018
5.1、扩展运算符 Rest/Spread 属性
Rest参数与spread扩展运算符在ES6中已经引入，不过ES6中只针对于数组，在ES9中为对象提供了像数组一样的rest参数和扩展运算符
```js
connect({
  host:'1.1.1.1',
  username:'ww',
  type:'物理机'
})
function connect({host,...user}) { } //除过host,其他都存到user中
const a = { q:1,w:23}
const b = { e:4,r:44}
{...a,...b}   //将对象合并
```
5.2、正则扩展
1）命名捕获分组（Regular Expression Named Capture Groups）
```js
et str = '<a href="http://www.atgugigu.com">哈哈啊</a>'
const reg1 = /<a href="(.*)">(.*)<\/a>/
const res = reg1.exec(str)    //['<a href="http://www.atgugigu.com">哈哈啊</a>', 'http://www.atgugigu.com', '哈哈啊']
  
const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/   //使用 ?<url> 进行分组起名
const result = reg.exec(str)   // groups: {url: 'http://www.atgugigu.com', text: '哈哈啊'}
```

2）反向断言（lookbehind）
```js
let str = 'dsf12哈哈么43543啦啦啦啦啦'
const regZ = /\d+(?=啦)/       //正向断言
const res = regZ.exec(str)    //43543
const regF = /(?<=么)\d+/     //反向断言
const result = regF.exec(str) //43543
```

3）dotAll模式

dot . 元字符 除换行符以外的任意单个字符
```js
let str = `
      <ul>
          <li>
              <a>电影1</a>
              <p>上映日期：1992-2-3</p>
          </li>
          <li>
              <a>定影2</a>
              <p>上映日期：2004-3-2</p>
          </li>
  </ul>`
const reg1 = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;
let result;let data = []
while (result = reg1.exec(str)){
  data.push({title:result[1],date:result[2]})
}
console.log(data)   // {title: '电影1', date: '上映日期：1992-2-3'} {title: '定影2', date: '上映日期：2004-3-2'}
```
## 第六章 ES10特性=ES2019
6.1、Object.fromEntries()
返回一个给定对象自身可枚举属性的键值对数组
```js
//二维数组
const obj = Object.fromEntries([      //name: "ee";xueke: "dd,ee,ff"
  ['name','ee'],
  ['xueke','dd,ee,ff']
])
//map
const m = new Map({})
m.set('name','ee')
const res = Object.fromEntries(m)   	     //将二维数组转换成对象
const arr = Object.entries({  name:'dd'})      //将对象转换成二维数组
```
6.2、字符串扩展 trimStart() 和 trimEnd()
```js
let str= '   ihj      '
str.trimStart()   //清除左侧空格
str.trimEnd()     //清除右侧空格
```

6.3、数组方式扩展 flat() 和 flatMap() ：
```js
const arr = [1,2,3,[12,2,[2,3]]]
arr.flat(2)   //[1, 2, 3, 12, 2, 2, 3]
const result = arr1.flatMap(item=>item * 10)   
```

6.4、Symbol.prototype.description
只读属性，返回Symbol 对象的可选描述的字符串。
```js
let s = Symbol('尚硅谷')  
s.description    //尚硅谷
```

## 第七章 ES11特性 =ES2020
7.1、私有属性
```js
class Person{
  name;   //公有属性
  #age;   //私有属性
  constructor(name,age,weight){
    this.name = name;
    this.#age = age;  //需要加上#}
}
const per = new Person('qq',22,345)
```

7.2、Promise.allSettled
合并多个promise
```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(()=>{resolve('商品 -1 ')})
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(()=>{resolve('商品 -2 ')
    // reject('出错了')  })
})
const p = Promise.allSettled([p1,p2])   //返回结果总是成功的
const p22 = Promise.all([p1,p2])   //有一个失败，就失败
```
7.3、String.prototype.matchAll
返回结果是可迭代对象
```js
const reg = /<li>.*?<a>(.*?)<\/a>(.*?)<p>(.*?)<\/p>/sg    //模式修饰符g，dot匹配用g
const res = str.matchAll(reg)      //返回结果有next，是可迭代对象  ，爬虫用的多
for(let i of res){console.log(i)}    //for of 遍历
const arr = [...res]    // [Array(4), Array(4)]   对象扩展符
```

7.4、可选链操作符 Optional chaining
层级比较深时，做有无的判断，使用?.
```js
main({
  db:{
    host:'22.22.4.5',
    username:'root'}
})
function main(config) {
  const dbhost = config?.db?.host;    //省去层层判断
}
```
7.5、动态import()
7.6、BigInt
表示（-253-1~253-1）之间的数据
```js
let n = 52345678978652552n
console.log(n,typeof n)   //52345678978652552n 'bigint'
let s = 123；console.log(BigInt(s))   //转化的必须是整数，普通数据转为大整型
let max = Number.MAX_SAFE_INTEGER; console.log('max',max)  //9007199254740991 = 2^53-1
console.log(BigInt(max) + BigInt(5))  大数值运算，BigInt不能直接与普通数值做运算，需要都转换为bigint
```
7.8、 globalThis
始终指向全局对象
```js
console.log(globalThis)      //Window
```
## 第八章 ES12特性 =ES2021
8.1、 replaceAll
```js
jaconst str = 'hello world';
str.replaceAll('l', ''); // "heo word"
```

8.2、 Promise.any
Promise.any() 接收一个Promise可迭代对象，只要其中的一个 promise 成功，就返回那个已经成功的 promise 。如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），就返回一个失败的 promise

8.3、 WeakRefs
使用WeakRefs的Class类创建对对象的弱引用(对对象的弱引用是指当该对象应该被GC回收时不会阻止GC的回收行为)

8.4、 逻辑运算符和赋值表达式
```js
a ||= b	//等价于 	a = a || (a = b)
a &&= b    //等价于	a = a && (a = b)
a ??= b	//等价于	a = a ?? (a = b)
```

8.5、 数字分隔符
数字分隔符，可以在数字之间创建可视化分隔符，通过_下划线来分割数字，使数字更具可读性
```js
const money = 1_000_000_000;
	//等价于
	const money = 1000000000;
1_000_000_000 === 1000000000; 	// true
```

