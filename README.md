# React Template &middot; V5.0.0

> 此模板为**企业级**项目中使用的 `React` 架构方案。

**全面性:** 提供在实际项目中使用的架构, 减少重复工作, 快速启动项目。

**灵活性:** 此模板可以根据项目的实际需要, 剔除或扩展内容。

**被维护:** 此模板已投入生产项目所使用, 架构会每隔一段时间更新一次, 社区提出的 issue 和 pr 也会被注意和解决。

---

## 安装 & 使用

1. 从 [github 仓库](https://github.com/YernarT/react_template) `clone` 或 `use`。

2. 安装依赖: `pnpm install`

3. 删除 .git 文件, git 文件夹, 执行 `git init`

4. happy hacking :)

## 简约文档

此模板从一开始就被设计为同时开发多个的项目。多个项目使用相同的架构方案, 代码规范以减少开发者心智负担。

- 全面 TypeScript, 禁用 JavaScript
- 全面 FC, 禁用 Class Component
- 强制 tsc 校验

可以通过向 [此存储库](https://github.com/YernarT/react_template) 发 pr 来改进它。

### Git 提交规范

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

## 技术栈

- **Node:** `Node.js 16.13.0`
- **React:** `React ^17.0.2`
- **编写语言:** `TypeScript ^4.4.4`
- **构建工具:** `Vite ^2.7.2`
- **包管理工具:** `Pnpm 6.28.0`
- **UI 组件:** `Material Design`
- **网络请求:** `Axios`
- **状态管理:** `Recoil`
- **样式编辑:** `Styled-Components`
- **Hooks:** `ahooks ^3.1.9`
- **国际化:** `i18n`
- **格式化:** `prettier ^2.5.1`
- **语法检查:** `eslint ^8.7.0`
- **模拟数据:** `json-server ^0.17.0`

## 未来计划

**短期**

- 实现 _commitlint_ 标准。

**长久**

- 添加 _Unit Test_ 测试
- 升级 _React18_ 版本
- 完善 _TypeScript_ 类型

## 维护 & 赞助

| Github  |  身份  | 贡献 & 赞助 |
| :-----: | :----: | :---------: |
| YernarT | 维护者 |    1.33$    |

### License

此模板是 [MIT 许可](./LICENSE)。
