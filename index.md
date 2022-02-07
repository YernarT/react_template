<div align="center">
    <img width="200" height="200" 
    alt="React Template" 
    src="/logo.svg" />
    <br /><br />

[![license](https://img.shields.io/badge/React-17.0.2-blue?logo=React)](LICENSE)
[![license](https://img.shields.io/badge/Vite-2.7.2-blueviolet?logo=Vite)](LICENSE)
[![license](https://img.shields.io/badge/TypeScript-4.4.4-blue?logo=TypeScript)](LICENSE)

# React Template &middot; V5.0.0

</div>

> 此模板是 [我](https://github.com/YernarT) 在前端项目中使用的 `React` 架构方案。

---

## 安装 & 使用

1. 从 [github 仓库](https://github.com/YernarT/react_template) `clone` 或 `use`。

2. 安装依赖: `pnpm install`

3. 删除 .git 文件, git 文件夹, 执行 `git init`

4. happy hacking :)

## 简约文档

此模板的设计初心是为同时开发多个的项目。多个项目使用相同的架构方案, 代码规范以减少开发者心智负担。

一些特点:

- 全面 `TypeScript`, 禁用 `JavaScript`
- 全面 `FC`, 禁用 `Class Component`
- 强制 `tsc` 校验

可以通过向 [此存储库](https://github.com/YernarT/react_template) 发 pr 来改进它。

---

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
|   test   |    :white_check_mark:    |        更新测试        |
|  revert  |         :rewind:         |    回滚到上一个版本    |
| release  |         :trophy:         |     新的语义化版本     |
|    ci    | :vertical_traffic_light: |      持续集成修改      |
|  chore   |         :wrench:         | 项目构建或者依赖的改动 |
|   mod    |        :octocat:         |    不确定的分类修改    |

---

## ⛔️ Import 引入规则

> 遵守引入规范, 保持代码的可读性高

```typescript
// 引入类型统一提权到最高
// ⚠️ 引入类型使用import type
import type { Plugin } from 'vite'
import type { ReactElement } from 'react';

// 框架相关
import React from "react";
import { Link } from "react-router-dom":

// 样式区
import "xxx.less || xxx.css ....";
import cssStyle from "xxx.module.less";
// 静态文件区
import LoginBGImage from  "/@/assets/images/login_bg.png"
// 方法区
import { isFunction } from '/@/utils/is'
import { useScrollControl } from '/@/hooks/useScrollControl'

// 组件区域
import { Button } from "Antd";
import LoginPage from "@/pages/Login"
```

---

## 技术栈

- **Node:** `node.js 16.13.0`
- **React:** `react ^17.0.2`
- **编写语言:** `typeScript ^4.4.4`
- **构建工具:** `vite ^2.7.2`
- **包管理工具:** `pnpm 6.28.0`
- **UI 组件:** `material Design`
- **网络请求:** `axios`
- **状态管理:** `recoil`
- **样式编辑:** `styled-Components`
- **Hooks:** `ahooks ^3.1.9`
- **国际化:** `i18n`
- **格式化:** `prettier ^2.5.1`
- **语法检查:** `eslint ^8.7.0`
- **模拟数据:** `json-server ^0.17.0`

---

## 未来计划

**短期**

- 实现 _commitlint_ 标准。
- 升级 `react-router-dom v6`

**长久**

- 添加 _Unit Test_ 测试
- 升级 _React18_ 版本
- 完善 _TypeScript_ 类型

---

## 🟢 浏览器支持

支持所有现代浏览器

推荐本地开发浏览器: `Chrome 80 +`

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                             not support                                                                                              |                                                                                            last 2 versions                                                                                             |                                                                                                  last 2 versions                                                                                                  |                                                                                                last 2 versions                                                                                                |                                                                                                last 2 versions                                                                                                |

---

## 维护 & 赞助

| Github  |  身份  | 贡献 & 赞助 |
| :-----: | :----: | :---------: |
| YernarT | 维护者 |    2.14$    |

---

## License

此模板是 [MIT 许可](./LICENSE)。
