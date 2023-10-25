# commonjs
## 概念

1. commonJS [链接](https://javascript.ruanyifeng.com/nodejs/module.html#)

2. 模块化的好处 [链接](https://juejin.im/post/5e3985396fb9a07cde64c489#heading-15)

   ```
   命名空间
   可重用性
   可维护性
   ```

   

3. 源码加载

   ```
   require
   
   mod.require
   
   Module._load 模块的加载
   
   Module._resolveFilename 解析文件的名字，获取文件的绝对路径
   
   Module._cache 一个模块的缓存，没有缓存创建模块
   
   new Module(filename, parent) 
   
   Module._cache[filename] = module 缓存模块
   
   tryModuleLoad  尝试加载模块
   
   module.load 加载模块
   
   Module._extensions[] 加载模块， 以此是 .js  .json  .node
   
   module._complete  给模块添加闭包
   
   Module.wrap 包裹
   ```

   

4. require加载顺序

   ```
   require(xxx) 
   
   xxx 会转换成绝对路径
   
   一、优先从缓存加载规则
   二、核心模块，被编译到了二进制文件中，根据文件名加载
   三、路径形式的模块：
   	先加载本地文件， 加载顺序 .js -> .json -> .node
   四、第三方模块，
   	根据 package.json 中的main对应的加载顺序来加载
   	每个模块都有一个 module, module 属性有 paths: 属性
   	
   	类似 paths: [
           '/Users/yuyayong/init/study/my-koa/test/node_modules',
            '/Users/yuyayong/init/study/my-koa/node_modules',
            '/Users/yuyayong/init/study/node_modules',
            '/Users/yuyayong/init/node_modules',
            '/Users/yuyayong/node_modules',
            '/Users/node_modules',
            '/node_modules'
   	] 
   	
   	递归查找是否有对应的模块
   ```

5. require 加载源码机制

   ```
   详见 common.js
   ```

   

6. common.js 与 ES6 加载
   ```
   1. https://juejin.im/post/5badebedf265da0af609bdad
   
   2. https://juejin.im/post/5aaa37c8f265da23945f365c#heading-3
   ```

7. exports 与 module.exports区别 [链接](https://juejin.im/post/5d5639c7e51d453b5c1218b4)

   ```
   exports 只是 module.exports 的一个引用
   
   ```
## require的实现
1.  声明require
```js
   function myRequire(id){
   }
```
2. 将id转化为绝对路径
```js
// 声明模块
function Module(id) {
    this.id = id;
    this.exports = {};  // 代表的是模块的返回结果
    this.loaded = false; //模块是否已加载完毕
}
// 将路径转化为绝对路径
Module._resolveFileName = function (id) {
    let absPath = path.resolve(id);
    if (!path.extname(absPath)) {
        let extnameArray = Object.keys(Module._extensions);
        for (let i = 0; i < extnameArray.length; i++) {
            let file = absPath + extnameArray[i];
            try {
                fs.accessSync(file);
                return file;
            } catch (error) {
                console.log(error);
            }
        }
    } else {
        return absPath;
    }
}

```

3. 查看缓存中是否存在当前模块，如何有直接读取缓存，反之取加载
```js
function myRequire(id) {
    let absPath = Module._resolveFileName(id);
    if (Module._cacheModule[absPath]) {
        return Module._cacheModule[absPath]
    } else {
        //...todo
    }
}
```
4. 缓存没有的话去加载模块，将加载的模块缓存起来，下次直接读取缓存中的
```js
Module.prototype.load = function () {
    let extname = path.extname(this.id);
    // 根据文件扩展名去加载对应的方法
    Module._extensions[extname](this);
}
function myRequire(id) {
    let absPath = Module._resolveFileName(id);
    if (Module._cacheModule[absPath]) {
        return Module._cacheModule[absPath]
    } else {
        let module = new Module(absPath);
        module.load();
        // 将模块缓存起来
        Module._cacheModule[module.id] = module.exports;
        return module.exports;
    }
}
```
5. 根据后缀名加载不同的方法   
   - 后缀名为.json
   
   1. 直接使用readFileSync读取即可，2. 将其使用JSON.parse转成json对象3. 存储在module.exports中
   - 后缀名为.js

   1.使用readFileSync读取
   2.构造一个函数将读取的内容放在函数体中
   ```js
   Module.wrapper = [
    "(function(exports, require, module, __dirname, __filename){",
    "})"
   ]
   const str = fs.readFileSync(module.id,'utf8')
   /**
   module.exports = function sum(a,b){
      return a + b 
   }
   */
   const content =  Module.wrapper[0] + str + module.wrapper[1];
   /**
    content
    function(exports,require,module,__dirname,__filename){
      // 此处为读取到模块的内容
      module.exports = function sum(a,b){
         return a + b 
      }
    } 
    */   
   ```
   3. 使用node内置模块vm去加载文件（vm会创建一个沙箱环境，不会造成环境污染，eval会取到当前环境的变量，有可能会造成变量冲突而导出环境污染）
   ```js
   const fn = vm.runInThisContext(content);
   fn.call(module.exports,module.exports,require,module,path.dirname(module.id),module.id)
   ```
## 完整代码
```js
let path = require("path");
let fs = require("fs");
let vm = require("vm");

/**
 * 模块化的作用
 *  1. 解决命名冲突
 *  2. 方便维护
 */

function myRequire(id) {
    let absPath = Module._resolveFileName(id);
    if (Module._cacheModule[absPath]) {
        return Module._cacheModule[absPath]
    } else {
        let module = new Module(absPath);
        module.load();
        Module._cacheModule[module.id] = module.exports;
        return module.exports;
    }
}

function Module(id) {
    this.id = id;
    this.exports = {};  // 代表的是模块的返回结果
    this.loaded = false; //模块是否已加载完毕
}

// 缓存策略
Module._cacheModule = {};
// 将路径转化为绝对路径
Module._resolveFileName = function (id) {
    let absPath = path.resolve(id);
    if (!path.extname(absPath)) {
        let extnameArray = Object.keys(Module._extensions);
        for (let i = 0; i < extnameArray.length; i++) {
            let file = absPath + extnameArray[i];
            try {
                fs.accessSync(file);
                return file;
            } catch (error) {
                console.log(error);
            }
        }
    } else {
        return absPath;
    }
}

Module.wrapper = [
    "(function(exports, require, module, __dirname, __filename){",
    "})"
]

Module.prototype.load = function () {
    let extname = path.extname(this.id);
    Module._extensions[extname](this);
}

Module._extensions = {
    ".js"(module) {
        let str = fs.readFileSync(module.id, "utf8");
        let scriptStr = Module.wrapper[0] + str + Module.wrapper[1];
        let fn = vm.runInThisContext(scriptStr);
        /**
            function(exports, require, module, __dirname, __filename){
                module.exports = function sum(a, b) {
                    return a + b;
                }
            }
         */
        fn.call(module.exports, module.exports, myRequire, module, path.dirname(module.id), module.id);
    },
    ".json"(module) {
        let str = fs.readFileSync(module.id, "utf8");
        str = JSON.parse(str);
        module.exports = str;
    },
    ".node"(module) {
        // 解析为二进制插件模块
    }
}
let sum = myRequire("./sum.js");
console.log(sum(111, 222));
```





