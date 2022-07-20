<div align="center">
    <img width="200" height="200" 
    alt="React Template" 
    src="src/assets/image/favicon.svg" />
    <br /><br />

[![license](https://img.shields.io/badge/React-17.0.2-blue?logo=React)](https://reactjs.org/)
[![license](https://img.shields.io/badge/Vite-2.7.2-blueviolet?logo=Vite)](https://vitejs.dev/)
[![license](https://img.shields.io/badge/TypeScript-4.4.4-blue?logo=TypeScript)](https://www.typescriptlang.org/)

# React Template &middot; V5.0.0

</div>

> [English / 英文](./README.md) <br />前端 Web 项目中使用的 `React (CSR, SPA)` 架构方案。

---

## 安装 & 使用

1. 从 [github 仓库](https://github.com/YernarT/react_template) `clone` 或 `use`。

2. 安装依赖 (推荐 pnpm) `pnpm install`

   运行项目 `pnpm dev`

3. Happy hacking :)

## 简约文档

此模板的设计初心是为开发多个的项目时, 使用相同的架构方案, 代码规范以减少开发者心智负担。

**特点:**

- 全面 `TypeScript`, 禁用 `JavaScript`
- 全面 `FC`, 禁用 `Class Component`

可以通过向 [此存储库](https://github.com/YernarT/react_template) 发 Pull request 来改进它。

在 [这里]() 了解 issues 和 pr 的规范。

## Git 提交规范

`git commit -m <type>[optional scope]: <description>`

- type: 用于说明提交的改动类型, 只允许使用以下标识
- optional scope: 可选的修改范围, 用于标识提交主要涉及到代码中哪个模块
- description: 描述提交的主要内容, 做到言简意赅, 不超过 50 字符且不加句号

|   type   |         gitmoji          |      description       |
| :------: | :----------------------: | :--------------------: |
|   init   |        :rainbow:         |         初始化         |
|   feat   |        :sparkles:        |     新特性, 新功能     |
|   fix    |          :bug:           |        修复错误        |
|  update  |         :hammer:         |       更新某功能       |
|   wip    |      :construction:      |       正在开发中       |
|  rename  |        :pencil2:         |       重命名修改       |
|   perf   |          :zap:           |  优化相关(性能, 体验)  |
|   docs   |         :books:          |        文档修改        |
|  style   |       :nail_care:        |      代码格式修改      |
| refactor |        :recycle:         |        代码重构        |
|   test   |    :white_check_mark:    |      测试相关改动      |
|  revert  |         :rewind:         |    回滚到上一个版本    |
| release  |         :trophy:         |     新的语义化版本     |
|    ci    | :vertical_traffic_light: |      持续集成修改      |
|  chore   |         :wrench:         | 项目构建或者依赖的改动 |
|   mod    |        :octocat:         |    不确定的分类修改    |

---

## ⛔️ Import 规范

> 遵守引入规范, 保持代码的可读性高

```typescript
// 引入类型统一提权到最高
// ⚠️ 引入类型使用import type
import type { Plugin } from 'vite'
import type { ReactElement } from 'react';

// 框架相关
import React from "react";
import { Link } from "react-router-dom":

// 组件区域 (优先 UI库组件)
import { Button, Box } from '@mui/material';
import { RouteGuard } from "@/components"

// 方法区
import { useRequest } from 'ahooks'
import { use1vh } from '@/hooks'
import { sleep } from '@/utils'

// 静态文件区
import defaultUserAvatar from  "@/assets/images/default-user-avatar.png"
// 样式区
import "xxx.less || xxx.css ....";
import cssStyle from "xxx.module.css";

```

## 技术栈

- **Node:** `node.js 16.13.0`
- **React:** `react ^17.0.2`
- **编写语言:** `type script ^4.4.4`
- **构建工具:** `vite ^2.7.2`
- **包管理工具:** `pnpm 6.28.0`
- **UI 组件:** `material design 5`
- **网络请求:** `axios ^3.1.9`
- **状态管理:** `recoil ^0.6.1`
- **样式编辑:** `emotion ^11.7.1`
- **Hooks:** `ahooks ^3.1.9`
- **国际化:** `i18next ^21.6.11`
- **格式化:** `prettier ^2.5.1`
- **语法检查:** `eslint ^8.7.0`
- **模拟数据:** `json-server ^0.17.0`

## 未来计划

- 实现 _сommitlint_ 标准。
- 升级 `react-router-dom v6`
- 添加 _Unit Test_ 测试
- 升级 _React18_ 版本

## 🟢 浏览器支持

支持所有现代浏览器

推荐本地开发浏览器: `Chrome 80 +`

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                           |

## 许可

**React Template** 是 [MIT 许可](./LICENSE)。
