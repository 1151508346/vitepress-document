# vite 搭建模块联邦

## 目录

- [1、 创建应用](#1-创建应用)
  - [1.1、 创建远程应用](#11-创建远程应用)
  - [1.2、创建本地应用](#12创建本地应用)
- [2、配置模块联邦](#2配置模块联邦)
  - [2.1、安装模块联邦插件](#21安装模块联邦插件)
  - [2.2、配置remote应用的vite.config.js](#22配置remote应用的viteconfigjs)
  - [2.3、 配置host应用的vite.config.js](#23-配置host应用的viteconfigjs)
- [3、使用模块联邦](#3使用模块联邦)

## 1、 创建应用

### 1.1、 创建远程应用

```bash 
pnpm create vite remote --template vue
cd remote
pnpm install
```


### 1.2、创建本地应用

```bash 
pnpm create vite host --template vue
cd host
pnpm install
```


## 2、配置模块联邦

### 2.1、安装模块联邦插件

> 分别在host和remote中进行安装

```bash 
pnpm add @originjs/vite-plugin-federation --dev

```


### 2.2、配置remote应用的vite.config.js

```javascript 
export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'remote-app',  // 模块联邦的名称
            filename: 'remoteEntry.js', // 模块联邦的入口文件
            // 暴露的模块
            exposes: {
                // 在remote应用中创建的Button组件，用于外部共享组件
                './Button': './src/components/Button.vue',
            },
            shared: ['vue'] // 共享的依赖
            })
        ],
        build: {
        target: 'esnext', // 需要支持动态导入
        // 打包后的文件输出目录
        outDir: path.resolve(__dirname, '../dist/remote')
    }
})

```


### 2.3、 配置host应用的vite.config.js

```javascript 
const isDev = mode => mode === 'development'
export default defineConfig(({mode}) => {
  const remoteFile = isDev(mode) ? 'dev' : 'prd'
  return {
    plugins: [
        vue(),
    federation({
      name: 'host-app',
      // 引用远程模块
      remotes: {
        // 将打包好的remote部署到指定服务器上，http://xxxxx:5500/assets/remoteEntry.js
        remote_app: 'http://localhost:5500/assets/remoteEntry.js' // 远程模块的地址 生产使用
      },
      shared: ['vue'] // 共享的依赖
    })
    ],
    resolve:{
      extensions:['.js','.json','.vue','.jsx'],
      alias:{
        // 本地开发时，使用本地组件
        "@remote_components": path.resolve(__dirname, '../remote/src/components'),   // 开发环境使用，本地可以实时预览
        // 在host应用的src/components中创建index.remote.prd.js和index.remote.dev.js，用于区分不同环境的组件
        // 使用@remote/components时，会根据环境自动引入对应的组件
        "@remote/components": path.resolve(__dirname, `src/components/index.remote.${remoteFile}.js`)
        
      }
    },
    build: {
      target: 'esnext',
      outDir: path.resolve(__dirname,'../dist/remote')
    }
  }
})
```


- host/src/components/index.remote.dev.js

```typescript 
import Button from '@remote_components/Button'
export {
    Button
}
export default {
    Button
}


```


- host/src/components/index.remote.prd.js

```javascript 
import Button from 'remote_app/Button'
export {
    Button
}
export default {
    Button
    
}


```


## 3、使用模块联邦

```javascript 
<script setup>
// 本地开发时，直接加载remote/src/components 
// 生产时 remote_app/button 直接通过 http://localhost:5500/ assets/remoteEntry.js加载远程文件 
// 这样远程的组件就不会打包进来，减小打包体积 同时加快打包速度

import {Button} from '@remote/components' 

</script>
<template>
    <div>
        <Button/>
    </div>
</template>
```
