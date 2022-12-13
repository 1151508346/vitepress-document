# vue2+vite 项目搭建

## vue2.7.x + vite 项目搭建

> 2022 年 7 月 1 日，vue 正式迎来 2.7 版本，代号：“Naruto”。支持 Composition API + &lt;script setup&gt;

## 按照需要的插件

- @vitejs/plugin-vue2 vite 的 vue2.7 插件
- @vitejs/plugin-legacy 打包支持 IE
- unplugin-vue-components 按需引入插件
  > npm install @vitejs/plugin--vue2 @@vitejs/plugin-legacy unplugin-vue-components -D

> package.json

```json
{
  "name": "vite-project",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
  "dependencies": {
    "@vitejs/plugin-legacy": "^3.0.1",
    "vue": "^2.7.14",
    "vue-template-compiler": "^2.7.14"
  },
  "devDependencies": {
    "@vitejs/plugin-vue2": "^2.2.0",
    "unplugin-vue-components": "^0.22.12",
    "vite": "^3.0.7"
  }
}
```

## 相关配置

## 1. vscode 的 vetur 插件适配 (可选配置)
   > 参考资料: https://github.com/vuejs/vetur/issues/2296#issuecomment-1155957974
   > 需要在根目录创建 vetur.config.js

```js
// vetur.config.js
module.exports = {
  settings: {
    "vetur.completion.autoImport": false,
    "vetur.experimental.templateInterpolationService": false,
    "vetur.validation.interpolation": false,
    "vetur.validation.template": false,
    "vetur.validation.templateProps": false,
    "vetur.validation.style": false,
    "vetur.validation.script": false,
    "vetur.format.enable": false,
    "vetur.ignoreProjectWarning": true,
    "vetur.languageFeatures.codeActions": false,
    "vetur.languageFeatures.semanticTokens": false,
    "vetur.languageFeatures.updateImportOnFileMove": false,
    "vetur.trace.server": "off",
    "vetur.underline.refValue": false,
  },
};
```

或者改用 volar 插件

> 创建 tsconfig.json(如何项目没有使用 ts 就采 jsconfig.json)

```json
{
  "vueCompilerOptions": {
    "target": 2.7
  }
}
```

## 2. vite 适配 vue2.7
   > 参考资料: https://github.com/vuejs/vue/blob/main/CHANGELOG.md#vue-cli--webpack
   > 使用官方的@vitejs/plugin-vue2 插件

vite 创建 vue 项目后, 把插件替换下就行了

vite.config.js

```js
import { defineConfig } from "vite";
// import vue from '@vitejs/plugin-vue'; // 这是vue3的官方插件
import legacy from "@vitejs/plugin-legacy";
import Components from "unplugin-vue-components/vite";
import { ElementUiResolver } from "unplugin-vue-components/resolvers";
import vue from '@vitejs/plugin-vue2' // vue2.7.x所使用的插件
import path from "path";
export default {
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "not ie < 9"],
    }),
    Components({
      resolvers: [ElementUiResolver()],
    }),
    
  ],
  build: {
    outDir: "dist",
  },
};

```

## 3. vue-router安装
> vue2应该只支持vue-router3版本

## 4. pinia安装
> 按官方文档引入即可: https://pinia.vuejs.org/getting-started.html#installation
```js
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  // other options...
  // ...
  // note the same `pinia` instance can be used across multiple Vue apps on
  // the same page
  pinia,
})
```
> 如果项目中没有使用pinia而使用的是vuex的话 会存在一些问题。
- 在vue3 中vuex 在4.x版本提供了 useStore 的方法可以在setup中获取到store 对象。
- 但是在vue2 中，vuex 并没有类似的方法。并且在setup 并不能直接使用mapActions, mapGetters, mapState 等方法。

**之前的处理**
```js
computed:{
	...mapState('modulesName',['stateName'])
},
methods:{
	...mapActions("modulesName", ["actionName"]),
}
```
在后续的使用中直接 this.stateName 或this.actionName 。

**在2.7中的处理**

直接在页面中 引入全局的 store 对象
```js
import store from '@/store/index';
```
*state*
```js
store.state.moduleName.stateName
```
*actions*
```js
store.dispatch("moduleName/actionName", paramsObj);
```



## 5. element-ui按需引入

使用unplugin-vue-components插件

- 💚 Vue 2 和 Vue 3 开箱即用
- ✨ 支持组件和指令.
- ⚡️ 支持 Vite, Webpack, Vue CLI, Rollup, esbuild 等打包工具, powered by <a href="https://github.com/unjs/unplugin">unplugin</a>.
- 🏝 Tree-shakable,只注册引用的组件.
- 🪐 文件夹名称作为命名空间.
- 🦾 ts支持.
- 🌈 内置解析器 支持主流的UI库.
- 😃 对 unplugin-icons支持友好.
  
使用方法(element-ui为例):

```js
import Components from 'unplugin-vue-components/vite'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    Components({
      resolvers: [ElementUiResolver()],
    }),
  ],
})
```
## 6. 打包后支持ie11
使用@vitejs/plugin-legacy插件

```js
import legacy from '@vitejs/plugin-legacy'
export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not ie < 9'],
    }),
  ],
})
```
## 7. 分离打包
> 参考资料: https://cn.vitejs.dev/guide/build.html#chunking-strategy
```js
import { splitVendorChunkPlugin } from 'vite'
export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'element-ui': ['element-ui'],
        },
      },
    },
  },
})

```
> 参考链接：https://www.jianshu.com/p/a52246c41197 


## 8.与 Vue 3 的行为差异

Composition API 使用 Vue 2 的基于 getter/setter 的响应式系统进行反向移植，以确保浏览器兼容性。 这意味着与 Vue 3 的基于 proxy 的系统存在一些重要的行为差异：

所有 Vue 2 更改检测警告仍然适用；
reactive()、ref() 和 shallowReactive() 将直接转换原始对象而不是创建代理：
```js
// 在2.7中可行，在3.x中不可行
reactive(foo) === foo
```
- readonly() 确实创建了一个单独的对象，但它不会跟踪新添加的属性并且不适用于数组；
避免在 reactive() 中使用数组作为 root 值，因为如果没有属性访问，则不会跟踪数组的变化（这将导致警告）；
- Reactivity APIs 忽略带有 symbol 键的属性。
此外，以下功能是未移植的：

- ❌ createApp()（Vue 2 没有独立的应用范围）
- ❌ &lt;script setup&gt; 中的顶层 await（Vue 2 不支持异步组件初始化）
- ❌ 模板表达式中的 TypeScript 语法（与 Vue 2 解析器不兼容）
- ❌ Reactivity transform（仍处于试验阶段）
- ❌ options 组件不支持 expose 选项（但 &lt;script setup&gt; 支持 defineExpose()）。

> 参考链接 https://zhuanlan.zhihu.com/p/536477463

## vue2.6.x+vite 搭建
> vue2.6.x和vue2.7.x所使用的插件不一样 ，同时按照的vue-template-compiler 模板编译的插件版本要保持一致
> 
> 目前vue2.6.x版本最新是2.6.14 
> 
> npm install vue@2.6.14 vue-template-compiler@2.6.14 -S

package.json 
```json
"dependencies": {
    "vue": "^2.6.14",
    "vue-template-compiler": "^2.6.14",
  },
```
```cmd
npm install vue@2.6.14 vue-template-compiler@2.6.14 -D
```
vite.config.js

```js
import { defineConfig } from "vite";
// import vue from '@vitejs/plugin-vue'; // 这是vue3的官方插件
import legacy from "@vitejs/plugin-legacy";
import Components from "unplugin-vue-components/vite";
import { ElementUiResolver } from "unplugin-vue-components/resolvers";
// import vue from '@vitejs/plugin-vue2' // vue2.7.x所使用的插件
import {createVuePlugin} from 'vite-plugin-vue2' // vue2.6.x所使用的插件
import path from "path";
export default {
  plugins: [
    // vue(),
    createVuePlugin(),
    legacy({
      targets: ["defaults", "not ie < 9"],
    }),
    Components({
      resolvers: [ElementUiResolver()],
    }),
    
  ],
  build: {
    outDir: "dist",
  },
};

```
> 备注：其他配置均可参考2.7.x的配置，基本都是一样的






