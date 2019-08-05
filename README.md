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
<br>
<br>

## 实现细节

<br>

### 细节一

问题一简述

<br>
