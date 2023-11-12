# 实现分块获取数据 xhr 和 fetch

实现一个类似于 chartGPT 返回流式数据的效果，也可以用来实现打字机效果。
后端实现使用 node，前端分别使用 xhr 和 fetch 两种方式。

> 后端代码

```js
const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    const content = fs.readFileSync(
      path.resolve(__dirname, "./index.html"),
      "utf8"
    );
    res.end(content);
    return;
  }
  if (req.url === "/data") {
    //Transfer-Encoding:chunked
    res.writeHead(200, {
      "Content-Type": "text/html;charset=utf8",
      "Transfer-Encoding": "chunked",
    });

    // 模拟生成大量数据
    const data = Array.from({ length: 10 }, (_, index) => `Data ${index}\n`);

    // 将数据逐行发送给客户端
    let index = 0;
    const interval = setInterval(() => {
      if (index < data.length) {
        res.write(data[index]);
        index++;
      } else {
        clearInterval(interval);
        res.end();
      }
    }, 100);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

const port = 3000; // 服务器监听的端口号
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

## 使用 fetch 来实现

> 使用 fetch 的 getReader 来获取取响应的 ReadableStream 对象的阅读器。

```js
fetch("http://localhost:3000/data")
  .then((response) => {
    const reader = response.body.getReader();
    function read() {
      return reader.read().then(({ done, value }) => {
        if (done) {
          console.log("All data received");
          return;
        }
        const text = new TextDecoder().decode(value);
        console.log(text, "------");
        return read();
      });
    }
    return read();
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## 使用 xhr 来实现

```js
function ajax() {
  let url = "http://localhost:3000/data";
  const xhr = new XMLHttpRequest();
  let preRead = "";
  xhr.onprogress = (e) => {
    const text = xhr.response;
    const newText = text.replace(preRead, "");
    console.log(newText, "aaaaaaaaaaaaaa");
    preRead = text;
  };
  xhr.onload = () => {
    console.log("读取完毕");
  };
  xhr.open("POST", url, true);
  xhr.send();
}
ajax();
```

### xhr 和 fetch 的一个对比

- fetch 通过 getReader()来获取 ReadableStream 对象的阅读器来读取流式数据，不需要额外的配置
  ```js
  const reader = response.body.getReader()：
  ```
- xhr 使用 onprocess 来监控响应的数据，
  1. 通过 xhr.response 来获取内容，注意的是每次获取到的数据都是包含上次的数据（获取的数据越来越多），可以需要将上次的数据清除（根据个人需求使用）
  ```js
  let preRead = ""; // 用来保存上次的数据
  xhr.onprogress = (e) => {
    const text = xhr.response;
    // 将和上次一样的内容替换成空，newText就是本次获取到的新数据
    const newText = text.replace(preRead, "");
    preRead = text;
  };
  ```
  2. 使用 xhr 还需要后端能够指出分块传输，需要设置响应头，"Transfer-Encoding"="chunked"，来支持分块传输，还有必须设置"Content-Type"="text/html;charset=utf8",否则不起作用（Content-Type 默认是：text/plain 文本类型）
  ```js
    res.writeHead(200, {
      // 这块必须设置text/html;charset=utf-8,
      "Content-Type": "text/html;charset=utf8",
      // 用来支持分块传输的响应头
      "Transfer-Encoding": "chunked",
    });  
  ```

总结
1. fetch获取流失数据比较简单，不需要后端进行额外的配置
2. xhr获取流式数据较为麻烦，需要后端配置支持响应流式数据的响应头
