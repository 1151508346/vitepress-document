# pnpm 搭建monorepo

## 1、创建pnpm-workspace.yaml 
  - 将工作根目录下的packages包含进来
  ```yaml
  packages:
    - packages/*
  ```
## 2、解决幽灵依赖的问题
  > 幽灵依赖： 当我们安装包的时候，指定安装的包会有很多依赖会被下载下来，通过pnpm安装的包相关的依赖是不被扁平化到node_modules中的，如果通过npm安装的包会有很多依赖被打入到node_modules中，这些没有被打入到node_modules中的依赖包被称为幽灵依赖

  -  根目录创建.npmrc文件
  ```txt
    shamefully-hosit=true
  ```
  > 通过上述配置可以将依赖包扁平化打入到node_modules中，

  *备注：当增加上述配置之后需要重新安装依赖方可生效* 

## 3、将packages中的包安装到工作的根目录中
  例如：packages中创建了demo和demo2两个子项目，
  - demo的package.json
  ```json
  {
    "name": "@tm/demo2",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type": "module",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
  }

  ```
  - demo2的package.json
  ```json
    {
    "name": "@tm/demo2",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type": "module",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
  }

  ```
  - 在根目录中运行如下命令：
  方案1：
  ```sh
    pnpm add @tm/demo @tm/demo2 --workspace -w
  ```
  方案2：
  ```sh
    pnpm add @tm/demo@workspace:* @tm/demo2@workspace:* -w
  ```
  > --workspace 和 @workspace:* 均表示在当前的工作空间中进行安装
  - 至此在工作的根目录中可以看到如下依赖：
  ```json
  {
    "dependencies": {
      "@tm/demo": "workspace:^",
      "@tm/demo2": "workspace:^"
    }
  }
  ```
## 4、将demo包安装到demo2中
  方案1：
  ```sh
  pnpm add @tm/demo@workspace:* --filter @tm/demo2
  ```
  方案2：
  ```sh
  pnpm add @tm/demo --filter @tm/demo2 --workspace
  ```
  - 至此在demo2包中可以看到如下依赖：
  ```json
  {
    "name": "@tm/demo2",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type": "module",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "@tm/demo": "workspace:^"
    }
  }
```

