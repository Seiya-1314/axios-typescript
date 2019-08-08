# axios-typescript

<br>

## 前言

<br>

本项目是自己在学习 TypeScript 相关知识，以及慕课网上的课程[《基于 TypeScript 从零重构 axios》](https://coding.imooc.com/class/330.html)后的练手之作。

<br>
<br>
<br>

## 项目目标

<br>

使用 TypeScript 从零实现一个 axios，然后进行完整的单元测试。希望能够了解 axios 的实现，初步掌握 TypeScript 的使用。

<br>
<br>
<br>

## 项目初始化

<br>

由于不熟悉 TypeScript 库开发的相关工具链，为了集中精力学习 TypeScript 的使用，以及 axios 的实现，所以没有选择自己从零搭建项目结构，而是使用了一个开源的 TypeScript 开发基础库的脚手架工具，快速初始化一个 TypeScript 项目，这是[官网地址](https://github.com/alexjoverm/typescript-library-starter)。

<br>

### 目录文件介绍

`TypeScript library starter` 的目录结构如下：

```
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── code-of-conduct.md
├── node_modules
├── package-lock.json
├── package.json
├── rollup.config.ts    // rollup 配置文件
├── src                 // 源码目录
├── test                // 测试目录
├── tools               // 发布到 GitHup pages 以及 发布到 npm 的一些配置脚本工具
├── tsconfig.json       // TypeScript 编译配置文件
└── tslint.json         // TypeScript lint 文件
```

<br>

### 优秀工具集成

使用 `TypeScript library starter` 创建的项目集成了很多优秀的开源工具：

- 使用 [RollupJS](https://rollupjs.org/) 帮助我们打包。
- 使用 [Prettier](https://github.com/prettier/prettier) 和 [TSLint](https://palantir.github.io/tslint/) 帮助我们格式化代码以及保证代码风格一致性。
- 使用 [TypeDoc](https://typedoc.org/) 帮助我们自动生成文档并部署到 GitHub pages。
- 使用 [Jest](https://jestjs.io/)帮助我们做单元测试。
- 使用 [Commitizen](https://github.com/commitizen/cz-cli)帮助我们生成规范化的提交注释。
- 使用 [Semantic release](https://github.com/semantic-release/semantic-release)帮助我们管理版本和发布。
- 使用 [husky](https://github.com/typicode/husky)帮助我们更简单地使用 git hooks。
- 使用 [Conventional changelog](https://github.com/conventional-changelog/conventional-changelog)帮助我们通过代码提交信息自动生成 change log。

<br>

### Npm Scripts

- `npm run lint`: 使用 TSLint 工具检查 `src` 和 `test` 目录下 TypeScript 代码的可读性、可维护性和功能性错误。
- `npm start`: 观察者模式运行 `rollup` 工具打包代码。
- `npm test`: 运行 `jest` 工具跑单元测试。
- `npm run commit`: 运行 `commitizen` 工具提交格式化的 `git commit` 注释。
- `npm run build`: 运行 `rollup` 编译打包 TypeScript 代码，并运行 `typedoc` 工具生成文档。

<br>
<br>
<br>

## 项目总结

<br>

### 处理请求 URL 参数

我们需要把 params 对象的 key 和 value 拼接到 url 上，这样服务端就可以通过请求的 url 解析到我们传来的参数数据了。对于 params 对象，这里有几种特殊情况需要进行处理：

- **参数值为数组**

- **参数值为对象**

- **参数值为 Date 类型**

- **特殊字符支持**

- **空值忽略**

- **丢弃 url 中的哈希标记**

- **保留 url 中已存在的参数**

<br>
<br>

### 处理请求 body 数据

我们通过执行 `XMLHttpRequest` 对象实例的 `send` 方法来发送请求，并通过该方法的参数设置请求 `body` 数据。我们常用的携带 data 的请求方式如下：

```js
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})
```

这个时候 `data`是不能直接传给 `send` 函数的，我们需要把它转换成 JSON 字符串。

<br>
<br>

### 处理请求 header

上面做了请求数据的处理，把 `data` 转换成了 JSON 字符串，但是数据发送到服务端的时候，服务端并不能正常解析我们发送的数据，因为我们并没有给请求 `header` 设置正确的 `Content-Type `。所以我们要支持发送请求的时候，可以支持配置 `headers` 属性。

并且在当我们传入的 `data` 为普通对象的时候，`headers` 如果没有配置 `Content-Type` 属性，需要自动设置请求 `header` 的 `Content-Type` 字段为：`application/json;charset=utf-8`。

<br>
<br>

### 获取响应数据

代码层面上处理服务端响应的数据，并支持 Promise 链式调用的方式。同时，响应对象应该包含以下内容：

- **服务端返回的数据 `data`；**

- **HTTP 状态码 `status`；**

- **状态消息 `statusText`；**

- **响应头 `headers`；**

- **请求配置对象 `config`；**

- **请求的 XMLHttpRequest 对象实例 `request`；**

<br>
<br>

### 错误处理

目前为止都是处理了正常接收请求的逻辑，并没有考虑到任何错误情况的处理，这里对 AJAX 各种错误情况做处理。主要分以下几种情况：

- **网络异常错误处理**

- **超时错误处理**

- **非 200 状态码处理**

<br>
<br>

### 扩展接口

为了用户更加方便的使用 axios 发送请求 ，可以为所有支持请求方法扩展一些接口：

- `axios.request(config)`

- `axios.get(url, config)`

- `axios.post(url[, data [, config ]])`

- `axios.put(url[, data [, config ]])`

- `axios.patch(url[, data [, config ]])`

- `axios.delete(url[, config])`

- `axios.head(url[, config])`

- `axios.options(url[, config])`

<br>

使用这些方法，我们就不必在 config 中指定 url、method、data 这些属性了。


<br>
<br>
<br>

## 实现细节

<br>

### 细节一

问题一简述

<br>
