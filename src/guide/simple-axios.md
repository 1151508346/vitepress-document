# 实现一个简易版的axios

> *date: 2023-09-09*

```js

// 实例创建的核心 -- 工厂方法
function CreateAxiosFn() {
  let axios = new Axios();
  let req = axios.request.bind(axios);
  // 混⼊⽅法， 处理axios的request⽅法，使之拥有get,post...⽅法
  utils.extend(req, Axios.prototype, axios)
  // 新增代码
  utils.extend(req, axios)
  return req;
}

const utils = {
  // 工具方法，合并对象
  extend(a, b, context) {
    for (let key in b) {
      if (b.hasOwnProperty(key)) {
        if (typeof b[key] === 'function') {
          a[key] = b[key].bind(context);
        } else {
          a[key] = b[key]
        }
      }
    }
  }
}

// 创建拦截器
class InterceptorsManage {
  constructor() {
    this.handlers = [];
  }
  use(fullfield, rejected) {
    this.handlers.push({
      fullfield,
      rejected
    })
  }
}
// axios 类
class Axios {
  constructor() {
    // 新增代码
    this.interceptors = {
      request: new InterceptorsManage,
      response: new InterceptorsManage
    }
  }

  request(config) {
    // 拦截器和请求组装队列
    let chain = [this.sendAjax.bind(this), undefined] // 成对出现的，失败回调暂时不处理
    // 请求拦截
    this.interceptors.request.handlers.forEach(interceptor => {
      chain.unshift(interceptor.fullfield, interceptor.rejected)
    })
    // 响应拦截
    this.interceptors.response.handlers.forEach(interceptor => {
      chain.push(interceptor.fullfield, interceptor.rejected)
    })
    // 执⾏队列，每次执⾏⼀对，并给promise赋最新的值
    let promise = Promise.resolve(config);
    while (chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift())
    }
    return promise;
  }

  sendAjax(config) {
    return new Promise(resolve => {
      const { url = '', method = 'get', data = {} } = config;
      // 发送ajax请求
      console.log(config);
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.onload = function () {
        console.log(xhr.responseText)
        resolve(xhr.responseText);
      };
      xhr.send(data);
    })
  }
}

```
- 原始链接 https://juejin.cn/post/6856706569263677447#heading%20-4