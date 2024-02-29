# react 相关问题

## 1、.js后缀React文件在vite环境下面运行

  用react脚手架create-react-app的环境是webpack的，调试比较慢。

  除了脚手架，还有可以用vite用来运行react

  以下为步骤：

  1、npm init vite

  2、按照提示，这里省略。。

  3、按照2步骤提示会生成一个自定义的文件夹，用IDE打开这个文件夹，

  4、npm i 

  这样就可以了。

但是有一个问题，vite不能读写带有jsx脚本的js后缀文件。因为没有引入脚手架的babel组件

如果要让vite去解析js后缀文件的jsx文件，需要安装以下babel

1、npm i  @babel/plugin-transform-react-jsx

2、在vite配置文件vite.config.js引入babel

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ['@babel/plugin-transform-react-jsx'],//引入babel
    },
  })],
  base: './',
  server: {
    open: true, //vite项目启动时自动打开浏览器
    port: 8080, //启动端口号
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@c": resolve(__dirname, "src/components"),
    }
  },
})
```
## 2、手把手教你实现React数据持久化机制

[https://juejin.cn/post/7072761358277672974](https://juejin.cn/post/7072761358277672974)