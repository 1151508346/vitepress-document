## 史上最全，熬夜整理JavaScript高级的手写知识点，专业扫盲

## 1、实现原生的[AJAX](https://so.csdn.net/so/search?q=AJAX&spm=1001.2101.3001.7020)请求

```js
const ajax = {
    get(url, fn) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)// 第三个参数异步与否
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                fn(xhr.responeText)
            }
        }
        xhr.send()
    },
    post(url, data, fn) {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                fn(xhr.responeText)
            }
        }
        xhr.send(data)
    }
}

```

## 2、手写 new 的过程

```js

function myNew(fn, ...args) {
   const obj = {}
    obj.__proto__ = fn.prototype
    const r = fn.apply(obj, args)
    return typeof r === 'object' && r != null ? r : obj;
}

```



## 3、instanceof关键字

```js
function instanceOf(father, child) {
    const fp = father.prototype
    var cp = child.__proto__
 
    while (cp) {
        if (cp === fp) {
            return true
        }
        cp = cp.__proto__
    }
 
    return false
}
```

## 4、实现防抖函数

```js

function debounce(fn, delay = 500) {
    let timer;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        const args = arguments        
        timer = setTimeout(() => {
            fn.apply(this, args) // 改变this指向为调用debounce所指的对象
        }, delay)
    }
}
```

## 5、实现节流函数

```js


function throttle(fn, delay = 200) {
    let flag = true
    return function () {
        if (!flag) return
        flag = false
        const args = arguments
        setTimeout(() => {
            fn.apply(this, args)
            flag = true
        }, delay)
    }
}

```

## 6、实现数组去重

> 题目描述：实现一个数组的去重

```js

// 第一种：Map记录
function quchong1(arr) {
    const newArr = []
    arr.reduce((pre, next) => {
        if (!pre.has(next)) {
            pre.set(next, 1)
            newArr.push(next)
        }
        return pre
    }, new Map())
    return newArr
}
 
// 第二种：Set去重
function quchong2(arr) {
    return [...new Set(arr)]
}
```

## 7、用setTimeout实现setInterval

> 题目描述：setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗

```js

function mySetTimout(fn, delay) {
    let timer = null
    const interval = () => {
        fn()
        timer = setTimeout(interval, delay)
    }
    setTimeout(interval, delay)
    return {
        cancel: () => {
            clearTimeout(timer)
        }
    }
}
// 测试
const { cancel } = mySetTimout(() => console.log(888), 1000)
setTimeout(() => {
    cancel()
}, 4000)
```

## 8、用setInterval实现setTimeout

> 题目说明：没有，就是想刁难你

```js

function mySetInterval(fn, delay) {
    const timer = setInterval(() => {
        fn()
        clearInterval(timer)
    }, delay)
}
 
// 测试
mySetInterval(() => console.log(888), 1000)
```

## 9、实现一个compose函数
> 题目说明：实现以下效果
```js
function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a)
console.log(a(1)); // 1+2+3+4=11
```
> 实现如下：

```js
function compose(...fn) {
    if (fn.length === 0) return (num) => num
    if (fn.length === 1) return fn[0]
    return fn.reduce((pre, next) => {
        return (num) => {
            return next(pre(num))
        }
    })
}

```
## 10、实现一个科里化函数
> 题目要求：
```js

const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2,3)) // 1 + 2 + 3=6
```
> 实现如下：
```js
function currying(fn, ...args1) {
  // 获取fn参数有几个
  const length = fn.length
  let allArgs = [...args1]
  const res = (...arg2) => {
    allArgs = [...allArgs, ...arg2]
    // 长度相等就返回执行结果
    if (allArgs.length === length) {
      return fn(...allArgs)
    } else {
      // 不相等继续返回函数
      return res
    }
  }
  return res
}
 
// 测试：
const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2,3))
```
## 11、实现一个LRU缓存函数
> 题目说明：

![](/assets/test-bg.png)

> 实现如下：
```js
class LRUCache {
  constructor(size) {
    this.size = size
    this.cache = new Map()
  }
 
  get(key) {
    const hasKey = this.cache.has(key)
    if (hasKey) {
      const val = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, val)
      return val
    } else {
      return -1
    }
  }
 
  put(key, val) {
    const hasKey = this.cache.has(key)
    if (hasKey) {
      this.cache.delete(key)
    }
    this.cache.set(key, val)
    if (this.cache.size > this.size) {
      this.cache.delete(this.cache.keys().next().value)
    }
  }
 
}

```
## 12、简单实现 发布订阅模式
> 题目描述:实现一个发布订阅模式拥有on emit once off方法

```js
class EventEmitter {
    constructor() {
        this.cache = {}
    }
 
    on(name, fn) {
        const tasks = this.cache[name]
        if (tasks) {
            this.cache[name].push(fn)
        } else {
            this.cache[name] = [fn]
        }
    }
 
    off(name, fn) {
        const tasks = this.cache[name]
        if (task) {
            const index = tasks.findIndex(item => item === fn)
            if (index >= 0) {
                this.cache[name].splice(index, 1)
            }
        }
    }
 
    emit(name, ...args) {
        // 复制一份。防止回调里继续on，导致死循环
        const tasks = this.cache[name].slice()
        if (tasks) {
            for (let fn of tasks) {
                fn(...args)
            }
        }
    }
 
    once(name, cb) {
        function fn(...args) {
            cb(args)
            this.off(name, fn)
        }
        this.on(name, fn)
    }
}
```
## 13、实现JSON.parse
> 题目描述：实现JSON.parse
```js
function parse (json) {
    return eval("(" + json + ")");
}
```
## 14、将DOM转化成树结构对象
> 题目描述:
```js

<div>
    <span></span>
    <ul>
        <li></li>
        <li></li>
    </ul>
</div>
 
将上方的DOM转化为下面的树结构对象
 
{
    tag: 'DIV',
    children: [
        { tag: 'SPAN', children: [] },
        {
            tag: 'UL',
            children: [
                { tag: 'LI', children: [] },
                { tag: 'LI', children: [] }
            ]
        }
    ]
}

```
> 实现如下：

```js
function dom2tree(dom) {
    const obj = {}
    obj.tag = dom.tagName
    obj.children = []
    dom.childNodes.forEach(child => obj.children.push(dom2tree(child)))
    return obj
}
```
## 15、将树结构转换为DOM
> 题目描述：
```js
{
    tag: 'DIV',
    children: [
        { tag: 'SPAN', children: [] },
        {
            tag: 'UL',
            children: [
                { tag: 'LI', children: [] },
                { tag: 'LI', children: [] }
            ]
        }
    ]
}
 
将上方的树结构对象转化为下面的DOM
 
<div>
    <span></span>
    <ul>
        <li></li>
        <li></li>
    </ul>
</div>
```
> 实现如下：
```js
// 真正的渲染函数
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作
  vnode.children.forEach((child) => dom.appendChild(_render(child)));
  return dom;
}

```
## 16、判断一个对象有环引用
> 题目描述：验证一个对象有无环引用
```js
var obj = {
    a: {
        c: [
            1, 2
        ]
    },
    b: 1
}
obj.a.c.d = obj
console.log(cycleDetector(obj)) // true
```
> 实现思路：用一个数组存储每一个遍历过的对象，下次找到数组中存在，则说明环引用


```js

function cycleDetector(obj) {
    const arr = [obj]
    let flag = false
 
    function cycle(o) {
        const keys = Object.keys(o)
        for (const key of keys) {
            const temp = o[key]
            if (typeof temp === 'object' && temp !== null) {
                if (arr.indexOf(temp) >= 0) {
                    flag = true
                    return
                }
                arr.push(temp)
                cycle(temp)
            }
        }
    }
 
    cycle(obj)
 
    return flag
}
```
## 17、计算一个对象的层数
> 题目描述：给你一个对象，统计一下它的层数
```js
const obj = {
    a: { b: [1] },
    c: { d: { e: { f: 1 } } }
}
 
console.log(loopGetLevel(obj)) // 4
```
> 实现如下:
```js
function loopGetLevel(obj) {
    var res = 1;
 
    function computedLevel(obj, level) {
        var level = level ? level : 0;
        if (typeof obj === 'object') {
            for (var key in obj) {
                if (typeof obj[key] === 'object') {
                    computedLevel(obj[key], level + 1);
                } else {
                    res = level + 1 > res ? level + 1 : res;
                }
            }
        } else {
            res = level > res ? level : res;
        }
    }
    computedLevel(obj)
 
    return res
}

```
## 18、对象的扁平化
> 题目描述:
```js

const obj = {
  a: {
         b: 1,
         c: 2,
         d: {e: 5}
     },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
 }
 
 flatten(obj) 结果返回如下
 // {
 //  'a.b': 1,
 //  'a.c': 2,
 //  'a.d.e': 5,
 //  'b[0]': 1,
 //  'b[1]': 3,
 //  'b[2].a': 2,
 //  'b[2].b': 3
 //   c: 3
 // }

```
> 实现如下：


```js
const isObject = (val) =>  typeof val === "object" && val !== null
 
function flatten(obj) {
  if (!isObject(obj)) return
  const res = {}
  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`)
        })
      } else {
        for(let key in cur) {
          dfs(cur[key], `${prefix}${prefix ? '.' : ''}${key}`)
        }
      }
    } else {
      res[prefix] = cur
    }
  }
  dfs(obj, '')
  return res
}
 
// 测试
console.log(flatten(obj))

```
## 19、实现(a == 1 && a == 2 && a == 3)为true
> 题目描述：实现(a == 1 && a == 2 && a == 3)为true
```js
// 第一种方法
var a = {
  i: 1,
  toString: function () {
    return a.i++;
  }
}
console.log(a == 1 && a == 2 && a == 3) // true
 
// 第二种方法
var a = [1, 2, 3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3); // true
 
// 第三种方法
var val = 0;
Object.defineProperty(window, 'a', {
    get: function () {
        return ++val;
    }
});
console.log(a == 1 && a == 2 && a == 3) // true

```
## 20、实现限制并发的Promise调度器 （promise限流）
- 方案1
> 题目描述：JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个
```js
// addTask(1000,"1");
// addTask(500,"2");
// addTask(300,"3");
// addTask(400,"4");
// 的输出顺序是：2 3 1 4
 
// 整个的完整执行流程：
 
// 一开始1、2两个任务开始执行
// 500ms时，2任务执行完毕，输出2，任务3开始执行
// 800ms时，3任务执行完毕，输出3，任务4开始执行
// 1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
// 1200ms时，4任务执行完毕，输出4

```
> 实现如下：

```js

class Scheduler {
  constructor(limit) {
    this.queue = []
    this.limit = limit
    this.count = 0
  }
  
 
  add(time, order) {
    const promiseCreator = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(order)
          resolve()
        }, time)
      })
    }
    this.queue.push(promiseCreator)
  }
 
  taskStart() {
    for(let i = 0; i < this.limit; i++) {
      this.request()
    }
  }
 
  request() {
    if (!this.queue.length || this.count >= this.limit) return
    this.count++
    this.queue.shift()().then(() => {
      this.count--
      this.request()
    })
  }
}
 
// 测试
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(time, order);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();
```

- 方案2
> promise 限流,控制并发请求，最大有limit（限制）个请求同时发送
```ts
type Fn = () => Promise<any>
interface Task {
  fn: Fn,
  resolve: (value: unknown) => void,
  reject: (reason: unknown) => void
}
type TaskList = Task[];
class TaskLimit {
  count: number;
  limit: number;
  taskList: TaskList
  constructor(limit: number) {
    this.count = 0;
    this.limit = limit;
  }
  wakeUp() {
    if (this.count < this.limit && this.taskList.length > 0) {
      const { fn, resolve, reject } = this.taskList.shift() as Task;
      this.run(fn).then(resolve, reject)
    }
  }
  run(fn: Fn): Promise<any> {
    this.count++;
    return fn().then(r => {
      this.count--
      this.wakeUp()
      return r;
    })
  }

  hold(fn: Fn): Promise<any> {
    return new Promise((resolve, reject) => {
      this.taskList.push({
        fn,
        resolve,
        reject
      })
    })
  }
  load(fn: Fn) {
    if (this.count < this.limit) {
      return this.run(fn);
    } else {
      return this.hold(fn);
    }
  }

  static start(list: Fn[], limit: number, cb?: Function): Promise<any> {
    const taskInstance = new TaskLimit(limit);
    return Promise.all(list.map((fn: Fn) => {
      return taskInstance.load(fn)
    })).then((r: any) => {
      typeof cb === 'function' && cb(r)
      return r
    })
  }
}
```


## 21、实现lazyMan函数

> 题目描述： 
```
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!
 
LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~
 
LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~
 
LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper

```
> 实现如下：
```js
class _LazyMan {
  constructor(name) {
    this.tasks = []
    const task = () => {
      console.log(`Hi! This is ${name}`)
      this.next()
    }
    this.tasks.push(task)
    setTimeout(() => {
      this.next()
    }, 0)
  }
  next() {
    const task = this.tasks.shift()
    task && task()
  }
  sleep(time) {
    this.sleepWrapper(time, false)
    return this
  }
  sleepFirst(time) {
    this.sleepWrapper(time, true)
    return this
  }
  sleepWrapper(time, first) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`)
        this.next()
      }, time * 1000)
    }
    if (first) {
      this.tasks.unshift(task)
    } else {
      this.tasks.push(task)
    }
  }
  eat(food) {
    const task = () => {
      console.log(`Eat ${food}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}
 
// 测试
const lazyMan = (name) => new _LazyMan(name)
 
lazyMan('Hank').sleep(1).eat('dinner')
 
lazyMan('Hank').eat('dinner').eat('supper')
 
lazyMan('Hank').eat('supper').sleepFirst(5)

```
## 22、实现add函数

> 题目描述：实现一个 add 方法 使计算结果能够满足如下预期：

> - add(1)(2)(3)()=6
> - add(1,2,3)(4)()=10

```js
function add(...args1) {
  let allArgs = [...args1]
 
  function fn(...args2) {
    if (!args2.length) return fn.toString()
    allArgs = [...allArgs, ...args2]
    return fn
  }
 
  fn.toString = function () {
    return allArgs.reduce((pre, next) => pre + next)
  }
 
  return fn
}
// 测试
console.log(add(1)(2)(3)())
console.log(add(1, 2)(3)())

```

## 23、实现一个合格的深拷贝

```js
function deepClone(obj,hash=new WeakMap()){
  if(typeof obj === null || typeof obj !== 'object') {
    return obj;
  }
  if(hash.has(obj)){
    return hash.get(obj)
  }
  if(obj instanceof Date){
    return new Date(obj)
  }
  if(obj instanceof RegExp){
    return new RegExp(obj)
  }
  const cloneObj = new obj.constructor();
  hash.set(obj,cloneObj)

  for(let k in obj){
    if(obj.hasOwnProperty(k)){
      cloneObj[k] = deepClone(obj[k],hash)
    }
  }
  return cloneObj
}

```



## 24、实现 Promise
## 25、实现 async/await
> Array篇
> 定义一个测试数组
```js
const players = [
    { name: '科比', num: 24 },
    { name: '詹姆斯', num: 23 },
    { name: '保罗', num: 3 },
    { name: '威少', num: 0 },
    { name: '杜兰特', num: 35 }
]
```
## 26、forEach
> 参数代表含义

```js
item：遍历项
index：遍历项的索引
arr：数组本身
Array.prototype.sx_forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

players.sx_forEach((item, index, arr) => {
    console.log(item, index)
})
// { name: '科比', num: 24 } 0
// { name: '詹姆斯', num: 23 } 1
// { name: '保罗', num: 3 } 2
// { name: '威少', num: 0 } 3
// { name: '杜兰特', num: 35 } 4
```

## 27、map
> 参数代表含义

```js
item：遍历项
index：遍历项的索引
arr：数组本身
Array.prototype.sx_map = function (callback) {
    const res = []
    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, this))
    }
    return res
}

console.log(players.sx_map((item, index) => `${item.name}--${item.num}--${index}`))
// [ '科比--24--0', '詹姆斯--23--1', '保罗--3--2', '威少--0--3', '杜兰特--35--4' ]
```
## 28、filter
> 参数代表含义

```js
item：遍历项
index：遍历项的索引
arr：数组本身
Array.prototype.sx_filter = function (callback) {
    const res = []
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) && res.push(this[i])
    }
    return res
}

console.log(players.sx_filter(item => item.num >= 23))
// [
//     { name: '科比', num: 24 },
//     { name: '詹姆斯', num: 23 },
//     { name: '杜兰特', num: 35 }
// ]
```
## 29、every
> 参数代表含义
```js
item：遍历项
index：遍历项的索引
arr：数组本身
Array.prototype.sx_every = function (callback) {
    let flag = true
    for (let i = 0; i < this.length; i++) {
        flag = callback(this[i], i, this)
        if (!flag) break
    }

    return flag
}

console.log(players.sx_every(item => item.num >= 23)) // false
console.log(players.sx_every(item => item.num >= 0)) // true
```
## 30、some
> 参数代表含义

```js
item：遍历项
index：遍历项的索引
arr：数组本身
Array.prototype.sx_some = function (callback) {
    let flag = false
    for (let i = 0; i < this.length; i++) {
        flag = callback(this[i], i, this)
        if (flag) break
    }

    return flag
}

console.log(players.sx_some(item => item.num >= 23)) // true
console.log(players.sx_some(item => item.num >= 50)) // false
```
## 31、reduce
> 参数代表含义
```js

pre：前一项
next：下一项
index：当前索引
arr：数组本身
Array.prototype.sx_reduce = function (callback, ...args) {
  let start = 0, pre
  if (args.length) {
      pre = args[0]
  } else {
      pre = this[0]
      start = 1
  }
  for (let i = start; i < this.length; i++) {
      pre = callback(pre, this[i], i, this)
  }
  return pre
}

// 计算所有num相加
const sum = players.sx_reduce((pre, next) => {
    return pre + next.num
}, 0)
console.log(sum) // 85
```
## 32、findIndex
> 参数代表含义

```js
item：遍历项
index：遍历项的索引
arr：数组本身
Array.prototype.sx_findIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i
        }
    }
    return -1
}

console.log(players.sx_findIndex(item => item.name === '科比')) // 0
console.log(players.sx_findIndex(item => item.name === '安东尼')) // -1
```
## 33、find
> 参数代表含义
```js

item：遍历项
index：遍历项的索引
arr：数组本身
Array.prototype.sx_find = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i]
        }
    }
    return undefined
}

console.log(players.sx_find(item => item.name === '科比')) // { name: '科比', num: 24 }
console.log(players.sx_find(item => item.name === '安东尼')) // undefined
```
## 34、fill
> 用处：填充数组
参数代表含义

 - initValue：填充的值
 - start：开始填充索引，默认0
 - end：结束填充索引，默认length

```js
Array.prototype.sx_fill = function (value, start = 0, end) {
  end = end || this.length
  for (let i = start; i < end; i++) {
      this[i] = value
  }
  return this
}

console.log(players.sx_fill('林三心', 1, 3))
// [
//     { name: '科比', num: 24 },
//     '林三心',
//     '林三心',
//     '林三心',
//     { name: '杜兰特', num: 35 }
// ]
```
## 35、includes
> 用处：查找元素，查到返回true，反之返回false，可查找NaN
```js

Array.prototype.sx_includes = function (value, start = 0) {
    if (start < 0) start = this.length + start
    const isNaN = Number.isNaN(value)
    for (let i = start; i < this.length; i++) {
        if (this[i] === value || (isNaN && Number.isNaN(this[i])) {
            return true
        }
    }
    return false
}

console.log([1, 2, 3].sx_includes(2)) // true
console.log([1, 2, 3, NaN].sx_includes(NaN)) // true
console.log([1, 2, 3].sx_includes(1, 1)) // false
```
## 36、join
> 用处：将数组用分隔符拼成字符串，分隔符默认为,
```js

Array.prototype.sx_join = function (s = ',') {
    let str = ''
    for(let i = 0; i < this.length; i++) {
        str = i === 0 ? `${str}${this[i]}` : `${str}${s}${this[i]}`
    }
    return str
}

console.log([1, 2, 3].sx_join()) // 1,2,3
console.log([1, 2, 3].sx_join('*')) // 1*2*3
```
## 37、flat
```js
Array.prototype.sx_flat = function (num = Infinity) {
  let arr = this
  let i = 0
  while (arr.some(item => Array.isArray(item))) {
      arr = [].concat(...arr)
      i++
      if (i >= num) break
  }
  return arr
}
const testArr = [1, [2, 3, [4, 5]], [8, 9]]

console.log(testArr.sx_flat(1))
// [1, 2, 3, 4, 5, 8, 9]
```


## 38、splice
> 难点

> 截取长度和替换长度的比较，不同情况
```js
Array.prototype.sx_splice = function (start, length, ...values) {
  if (length === 0) return []
  length = start + length > this.length - 1 ? this.length - start : length
  console.log(length)
  const res = [], tempArr = [...this]
  for (let i = start; i < start + values.length; i++) {
    this[i] = values[i - start]
  }
  this.length = start + values.length
  if (values.length < length) {
    const cha = length - values.length
    console.log(cha)
    for (let i = start + values.length; i < tempArr.length; i++) {
      this[i] = tempArr[i + cha]
    }
    this.length = this.length - cha 
  }
  if (values.length > length) {
    for (let i = start + length; i < tempArr.length; i++) {
      this.push(tempArr[i])
    }
  }
  for (let i = start; i < start + length; i++) {
    res.push(tempArr[i])
  }
  return res
}
```
>Object篇
> 定义一个测试对象

>const obj = {
>    name: '林三心',
>    age: 22,
>    gender: '男'
>}
## 39、entries
> 用处：将对象转成键值对数组
```js

Object.prototype.sx_entries = function (obj) {
    const res = []
    for (let key in obj) {
        obj.hasOwnProperty(key) && res.push([key, obj[key]])
    }
    return res
}

console.log(Object.sx_entries(obj))
// [ [ 'name', '林三心' ], [ 'age', 22 ], [ 'gender', '男' ] ]
```

## 40、fromEntries
> 用处：跟entries相反，将键值对数组转成对象

```js
Object.prototype.sx_fromEntries = function (arr) {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        const [key, value] = arr[i]
        obj[key] = value
    }
    return obj
}

console.log(Object.sx_fromEntries([['name', '林三心'], ['age', 22], ['gender', '男']]))
// { name: '林三心', age: 22, gender: '男' }
```
## 41、keys
> 用处：将对象的key转成一个数组合集
```js

Object.prototype.sx_keys = function (obj) {
    const keys = []
    for (let key in obj) {
        obj.hasOwnProperty(key) && res.push(key)
    }
    return keys
}

console.log(Object.keys(obj))
// [ 'name', 'age', 'gender' ]
```
## 42、values
>用处：将对象的所有值转成数组合集
```js
Object.prototype.sx_values = function (obj) {
    const values = []
    for (let key in obj) {
        obj.hasOwnProperty(key) && values.push(obj[key])
    }
    return values
}

console.log(Object.sx_values(obj))
// [ '林三心', 22, '男' ]
```
## 43、instanceOf
> 用处：A instanceOf B，判断A是否经过B的原型链
```js
function instanceOf(father, child) {
    const fp = father.prototype
    var cp = child.__proto__

    while (cp) {
        if (cp === fp) {
            return true
        }
        cp = cp.__proto__
    }
     
    return false
}

function Person(name) {
    this.name = name
}
const sx = new Person('林三心')

console.log(instanceOf(Person, sx)) // true
console.log(instanceOf(Person, sx2)) // false
```
## 44、is
>用处：Object.is(a, b)，判断a是否等于b
```js
Object.prototype.sx_is = function (x, y) {
    if (x === y) {
        // 防止 -0 和 +0
        return x !== 0 || 1 / x === 1 / y
    }

    // 防止NaN
    return x !== x && y !== y
}

const a = { name: '林三心' }
const b = a
const c = { name: '林三心' }

console.log(Object.sx_is(a, b)) // true
console.log(Object.sx_is(a, c)) // false
```
## 45、Object.assign
> 难点
```js
/**
assign接收多个对象，并将多个对象合成一个对象
这些对象如果有重名属性，以后来的对象属性值为准
assign返回一个对象，这个对象 === 第一个对象
*/
Object.prototype.sx_assign = function (target, ...args) {
    if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object')
    }
    target = Object(target)

    for (let nextObj of args) {
        for (let key in nextObj) {
            nextObj.hasOwnProperty(key) && (target[key] = nextObj[key])
        }
    }
    return target
}

const testa = { name: '林三心' }
const testb = { name: 'sunshine_lin', age: 22 }
const testc = { age: 18, gender: '男' }

const testd = Object.sx_assign(testa, testb, testc)
console.log(testd) // { name: 'sunshine_lin', age: 18, gender: '男' }
console.log(testa === testd) // true
```
> Function篇
## 46、call
```js
Function.prototype.sx_call = function (obj, ...args) {
    obj = obj || window

    // Symbol是唯一的，防止重名key
    const fn = Symbol()
    obj[fn] = this
     
    // 执行，返回执行值
    return obj[fn](...args)
}

const testobj = {
    name: '林三心',
    testFn(age) {
        console.log(`${this.name}${age}岁了`)
    }
}
const testobj2 = {
    name: 'sunshine_lin'
}

testobj.testFn.sx_call(testobj2, 22) // sunshine_lin22岁了
```

## 47、apply
```js
Function.prototype.sx_apply = function (obj, args) {
    obj = obj || window

    // Symbol是唯一的，防止重名key
    const fn = Symbol()
    obj[fn] = this
     
    // 执行，返回执行值
    return obj[fn](...args)
}

const testobj = {
    name: '林三心',
    testFn(age) {
        console.log(`${this.name}${age}岁了`)
    }
}
const testobj2 = {
    name: 'sunshine_lin'
}

testobj.testFn.sx_apply(testobj2, [22]) // sunshine_lin22岁了
```
## 48、Function.prototype.bind
> 难点：

> bind是返回一个函数，而不是执行结果
> bind返回的函数，拿来当做构造函数，该怎么处理
```js
Function.prototype.sx_bind = function (obj, ...args) {
    obj = obj || window

    // Symbol是唯一的，防止重名key
    const fn = Symbol()
    obj[fn] = this
    const _this = this
     
    const res = function (...innerArgs) {
        console.log(this, _this)
        if (this instanceof _this) {
            this[fn] = _this
            this[fn](...[...args, ...innerArgs])
            delete this[fn]
        } else {
            obj[fn](...[...args, ...innerArgs])
            delete obj[fn]
        }
    }
    res.prototype = Object.create(this.prototype)
    return res
}
```
> String篇
## 49、slice
> 参数代表含义

> - start：开始截取的字符索引(包含此字符)
> - end：结束截取的字符索引(不包含此字符)
> 注意点

> start > end：返回空字符串
> start < 0：start = 数组长度 + start

```js
String.prototype.sx_slice = function (start = 0, end) {
    start = start < 0 ? this.length + start : start
    end = !end && end !== 0 ? this.length : end

    if (start >= end) return ''
    let str = ''
    for (let i = start; i < end; i++) {
        str += this[i]
    }
     
    return str
}

console.log(str.sx_slice(2)) // nshine_lin
console.log(str.sx_slice(-2)) // in
console.log(str.sx_slice(-9, 10)) // shine_l
console.log(str.sx_slice(5, 1)) // ''
```
## 50、substr
> 参数代表含义

> - start：开始截取的字符索引(包含此字符)
> - length：截取的长度
> 注意点

> start < 0：start = 数组长度 + start
> length超出所能截取范围，需要做处理
> length < 0：返回空字符串
```js
String.prototype.sx_substr = function (start = 0, length) {
    if (length < 0) return ''

    start = start < 0 ? this.length + start : start
    length = (!length && length !== 0) || length > this.length - start ? this.length : start + length
     
    let str = ''
    for (let i = start; i < length; i++) {
        str += this[i]
    }
    return str
}

console.log(str.sx_substr(3)) // shine_lin
console.log(str.sx_substr(3, 3)) // shi
console.log(str.sx_substr(5, 300)) // ine_lin
```
## 51、substring
> 功能与slice大致相同
> 区别之处
> start > end：互换值

```js
String.prototype.sx_sunstring = function (start = 0, end) {
    start = start < 0 ? this.length + start : start
    end = !end && end !== 0 ? this.length : end

    if (start >= end) [start, end] = [end, start]
    let str = ''
    for (let i = start; i < end; i++) {
        str += this[i]
    }
     
    return str
}

console.log(str.sx_sunstring(2)) // nshine_lin
console.log(str.sx_sunstring(-2)) // in
console.log(str.sx_sunstring(-9, 10)) // shine_l
console.log(str.sx_sunstring(5, 1)) // unsh
```
> Promise篇
## 52、all
> 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
> 如果所有Promise都成功，则返回成功结果数组
> 如果有一个Promise失败，则返回这个失败结果
```js
    function all(promises) {
        const result = []
        let count = 0
        return new MyPromise((resolve, reject) => {
            const addData = (index, value) => {
                result[index] = value
                count++
                if (count === promises.length) resolve(result)
            }
            promises.forEach((promise, index) => {
                if (promise instanceof MyPromise) {
                    promise.then(res => {
                        addData(index, res)
                    }, err => reject(err))
                } else {
                    addData(index, promise)
                }
            })
        })
    }
```
## 53、race
>接收一个Promise数组，数组中如有非Promise项，则此项当做成功
>哪个Promise最快得到结果，就返回那个结果，无论成功失败
```js
    function race(promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach(promise => {
                if (promise instanceof MyPromise) {
                    promise.then(res => {
                        resolve(res)
                    }, err => {
                        reject(err)
                    })
                } else {
                    resolve(promise)
                }
            })
        })
    }
```
## 54、allSettled
> 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
> 把每一个Promise的结果，集合成数组，返回
```js
  function allSettled(promises) {
        return new Promise((resolve, reject) => {
            const res = []
            let count = 0
            const addData = (status, value, i) => {
                res[i] = {
                    status,
                    value
                }
                count++
                if (count === promises.length) {
                    resolve(res)
                }
            }
            promises.forEach((promise, i) => {
                if (promise instanceof MyPromise) {
                    promise.then(res => {
                        addData('fulfilled', res, i)
                    }, err => {
                        addData('rejected', err, i)
                    })
                } else {
                    addData('fulfilled', promise, i)
                }
            })
        })
    }
```

## 55、any
> any与all相反
> 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
> 如果有一个Promise成功，则返回这个成功结果
> 如果所有Promise都失败，则报错

```js
  function any(promises) {
    return new Promise((resolve, reject) => {
        let count = 0
        promises.forEach((promise) => {
            promise.then(val => {
                resolve(val)
            }, err => {
                count++
                if (count === promises.length) {
                    reject(new AggregateError('All promises were rejected'))
                }
            })
        })
    })
}
```
## 56、finally
> 接收一个回调函数，但无参数接收
> 无论成功失败状态，都会执行finally
```js
Promise.prototype.finally = function(callback) {
  return this.then(res => {
    callback()
    return res
  }, err => {
    callback()
    throw err
  })
}
```
## 57、Array中at方法的实现原理
```js

Array.prototype.at = function at(index){
    const arr = this;
    if(index>0){
        return arr[index]
    };
    if(index<0){
        const i = arr.length + index
        return arr[i]
    }
}
// const arr = [1,2,3,4,6]
// const r = arr.at(-2)
// console.log(r)

```
## 58、JSON.stringify的实现原理
```js

function stringify(obj) {
    if (typeof obj !== 'object') {
        if (typeof obj === 'string') {
        return `"${obj}"`
        } else {
        return obj.toString();
        }
    } else {
        const arr = []
        for (let k in obj) {
        const key = Array.isArray(obj) ? '' : `"${k}":`
        const value = obj[k]
        const token = key + stringify(value)
        arr.push(token)
        }
        if (Array.isArray(obj)) {
        return `[${arr.join(',')}]`
        } else {
        return `{${arr.join(',')}}`;
        }
    }
}
//   var r = stringify(obj)
//   var str = '{"name":"zs","age":100,"arr":[1,2,4,"a",{"a":1}]}';
```

## 59、根据id查找所在的所有父路径
```js
 const data = [
  {
    id: 1,
    name: '1',
    children: [
      {
        id: 11,
        name: '11',
        children: [
          { id: 111, name: '111'}
        ]
      }
    ]
  },
  { id: 2,name: '2' },
  { id: 3, name: '3' },
]
// 查找指定id所在的父路径
const searchIdWithParentPath = (list: any, id: number, target: any[] = []): any => {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (item.id === id) {
      target.push({ id: item.id, name: item.name })
      return target
    }
    if (item.children) {
      let r:any[] = searchIdWithParentPath(item.children, id,target)
      if (r.length) {
        target.push({ id: item.id, name: item.name })
      }
      return target;
    }
  }
  return target;
}

const r: any = searchIdWithParentPath(data, 111);
```
## 60、分时函数的封装
```js
/**
 * 
 * @param datas 数据
 * @param consumer  执行的回调，用户自己的逻辑
 * @param chunkSplitor 当有时间的时候执行任务
 * @returns 
 */
function performChunks(datas,consumer,chunkSplitor){
  if(typeof datas === 'number'){
    datas = new Array(datas)
  }
  if(datas.length === 0) return;
  if(chunkSplitor === undefined && globalThis.requestIdleCallback){
    chunkSplitor = function(task)  {
      requestIdleCallback(function(idle) {
        task(() => idle.timeRemaining() > 0)
      })
    }
  }
  if(chunkSplitor === undefined && !globalThis.requestIdleCallback){
    chunkSplitor = function(task)  {
      setTimeout(function(){
        task(function(time){
          return time > 16
        })
      },30)
    }
  }
  let i = 0;
  function _run(){
    if(i === datas.length) return ;
    chunkSplitor((hasTime) => {
      const now = Date.now();
      while(hasTime(Date.now() - now)){
        const item = datas[i]
        consumer(item,i,datas);
      }
      _run();
    })
  }
  _run();
}
```

## 61、高阶函数的应用-封装动画函数

```js
const animation = (duration, from, to, onProgress) => {
  const startTime = Date.now();
  const speed = (to - from) / duration;
  let value = from;
  onProgress(value);
  function _run() {
    const now = Date.now();
    const time = now - startTime
    const d = time * speed;
    if (time >= duration) {
      value = to;
      onProgress(value)
      return;
    }
    value = from + d;
    onProgress(value)
    requestAnimationFrame(_run)
  }
  requestAnimationFrame(_run)
}

```

## 62、单位转化函数
```js
/**
 * 
 * 单位转化函数
 * 
 * @param map 转化的映射表
 * @param v  要处理的值
 * @param u 传入的单位，默认是最小单位
 * @returns 
 */
const processFn = (map: { [s: string]: any }, v: number, u?: string) => {

  u ? (v = map[u] * v) : null
  // 默认u为最小的
  const entries = Object.entries(map)
  for(let i = 0 ; i < entries.length ;i++){
      const entry = entries[i]
      const [unit,unitValue] = entry
      if(v >= unitValue){
        const value = (v / unitValue).toFixed(2)
        return {unit,value}
      }
  }
  if(v <=1){
    return {
      value:v.toFixed(2),
      unit:entries.slice(-1)[0]
    }
  }

};


;(function test1(){
  const map = {
    y: 60 * 60 * 24 * 365 * 1000,
    d: 60 * 60 * 24 * 1000,
    h: 60 * 60 * 1000,
    m: 60 * 1000,
    s: 1000,
    ms: 1,
  };
  const r = processFn(map, 2603, 's');
  console.log(r,'r')
}());



;(function test1(){
  const map = {
    TB: Math.pow(1024, 4),
    GB: Math.pow(1024, 3),
    MB: Math.pow(1024, 2),
    KB: Math.pow(1024, 1),
    B: 1,
  };
  const r = processFn(map, 2603, 'KB');
  console.log(r,'r')
}());
```
## 63、Websocket心跳机制，断线重连
```js
class WebSocket {
  ws = null;
  reconnectTimer = null;
  heartBeat = {            // 心跳连接的时间设置
    time: 5 * 1000,      // 心跳时间间隔
    timeout: 3 * 1000,   // timeout：心跳超时间隔（!要少于心跳间隔）
    reconnect: 10 * 1000  // 断线重连时间
  };
  onclose() {
    this.ws.close();              //关闭webSocket连接
    this.webSocketState = false;  //关闭状态
    this.heartBeat.time = null;   //停止心跳
    if (this.reconnectTimer) {    //关闭重连
      clearInterval(this.reconnectTimer);
    }
  }
  //socket链接
  connectWebSocket() {
    let url = `wss://ws://baidu.com/msg/${this.userInfo.userId}`;
    this.ws = new WebSocket(url);
    this.init();  //初始化
  }
  init() {
    this.ws.addEventListener('open', () => {
      // eslint-disable-next-line spaced-comment
      this.webSocketState = true; //socket状态设置为连接，做为后面的断线重连的拦截器
      // eslint-disable-next-line no-unused-expressions
      console.log('开启');
      this.heartBeat && this.heartBeat.time ? this.startHeartBeat(this.heartBeat.time) : ''; // 是否启动心跳机制
    });
    this.ws.addEventListener('message', (e) => {
      this.webSocketState = true;
      console.log(JSON.parse(e.data), '信息')
    });
    this.ws.addEventListener('close', (e) => {
      this.webSocketState = false; // socket状态设置为断线
      console.log('断开了连接');
    });
    this.ws.addEventListener('error', (e) => {
      this.webSocketState = false; // socket状态设置为断线
      this.reconnectWebSocket(); // 重连
      console.log('连接发生了错误');
    });
  }
  // 心跳  time:心跳时间间隔
  startHeartBeat(time) {
    setTimeout(() => {
      //这里设置这是你要发送的内容
      // let data = {};
      // data.lon = this.lc.longitude;            //已省略获取地址步骤
      // data.lat = this.lc.latitude;
      this.ws.send(JSON.stringify(data))       //发送数据
      this.waitingServer();
    }, time);
  }
  // 延时等待服务端响应，通过webSocketState判断是否连线成功
  waitingServer() {
    // this.webSocketState = false;
    setTimeout(() => {
      if (this.webSocketState) {
        this.startHeartBeat(this.heartBeat.time);
        return;
      }
      console.log('心跳无响应，已断线');
      try {
        this.ws.close();
      } catch (e) {
        console.log('连接已关闭，无需关闭');
      }
      this.reconnectWebSocket();  //非主动关闭导致，触发重连
    }, this.heartBeat.timeout);
  }
```

## 64、url路径处理

```js
 function processPath(url,query={}){
     if(!url.includes('?')){
         return url + '?' + Object.entries(query).map(([k,v]) => `${k}=${v}`).join('&')
     }
     const [path,search] = url.split('?')
     const defaultQuerys = search.split('&').filter(Boolean).reduce((memo,next) => {
         const [k,v]  = next.split('=')
         if(k){
             memo.push({k,v});
         }
         return memo;
     },[...Object.entries(query).map(([k,v]) => ({k,v}))]);
     return path + '?' + defaultQuerys.map(item => `${item.k}=${item.v}`).join('&')
 }
```
## 65、浏览器打印指定的div内容
```js
function printContent(id,title){
// 创建新的浏览器窗口
  const printWindow = window.open('', '_blank');
  // 获取div的内容
  const divContent = document.getElementById((id)).innerHTML;
  // 写入内容到新窗口
  printWindow.document.write(`
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body >
      ${divContent}
      </body>
    </html>
  `);
  //printWindow.document.write(`<html><head><title>${title}</title>`);
  //printWindow.document.write('</head><body >');
  //printWindow.document.write(divContent);
  //printWindow.document.write('</body></html>');
  // 关闭文档对于写操作的准备
  printWindow.document.close();
  printWindow.onload = () => { 
    // 调用打印方法
    printWindow.print();
  }
}
```

## 66、判断是否是一个快乐数
```js
//  方案1
function isHappyNumber(num) {
    let seen = new Set();
    while (num !== 1 && !seen.has(num)) {
        seen.add(num);
        num = num.toString().split('').reduce((acc, digit) => acc + Math.pow(parseInt(digit, 10), 2), 0);
    }
    return num === 1;
}

console.log(isHappyNumber(19)); // 输出: true
console.log(isHappyNumber(4));  // 输出: false

//  方案2
function isHappyNumber(num){
  const getNext = (n) => {
    return (''+n).split('').reduce((memo,next) => memo + Math.pow(parseInt(next),2) ,0)
  }
  let first = num, second = getNext(num)
  while(second !== 1 && first !== second){
    first = getNext(first)
    second = getNext(getNext(second))
  }
  return second === 1;
}

const r = isHappyNumber(48) // false
// const r = isHappyNumber(19)  //true
console.log(r,'r')
```
## 67、最长递增子序列
```js
function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  const tails = [];
  tails[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let len = tails.length
    if (nums[i] > tails[len - 1]) {
      tails.push(nums[i])
      continue;
    }
     // 使用二分查找找到第一个大于等于nums[i]的位置
      let left = 0;
      let right = len - 1;
      let pos = -1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] >= nums[i]) {
          pos = mid;
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }

      if (pos !== -1) {
        tails[pos] = nums[i];
      }
  }
  return tails.length;
}

// 如果需要返回实际的LIS序列，可以稍作修改
function getLIS(nums) {
  if (nums.length === 0) return [];

  const tails = [];
  const prevIndices = new Array(nums.length).fill(-1);
  const indices = [];

  tails[0] = 0;
  let len = 1;


  for (let i = 1; i < nums.length; i++) {
    let lastIndex = len - 1
    if (nums[i] > nums[tails[lastIndex]]) {
      prevIndices[i] = tails[lastIndex];
      tails[len] = i;
      len++;
    } else {
      let left = 0;
      let right = len - 1;
      // let pos = -1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[tails[mid]] >= nums[i]) {
          // pos = mid;
          right = mid  - 1;
        } else {
          left = mid + 1 ;
        }
      }

      // if (pos !== -1) {
        if (left > 0) {
          prevIndices[i] = tails[left - 1];
        }
        tails[left] = i;
      // }
    }
  }
  // console.log(prevIndices.toString())

  // console.log(tails.toString())
  // 构建LIS序列
  const lis = [];
  let current = tails[len - 1];
  for (let i = 0; i < len; i++) {
    lis.unshift(nums[current]);
    current = prevIndices[current];
  }

  return lis;
}

const nums = [10, 9, 2,   3,1, 5, 7, 101, 18];
console.log(lengthOfLIS(nums)); // 输出: 5 (最长子序列是 [2, 3, 5,  7, 18])
console.log(getLIS(nums));     // 输出: [2, 3, 5, 7, 18]
```
