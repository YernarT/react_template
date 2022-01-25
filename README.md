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

### 方案一致性:

- 统一数据流
- 统一图标库
- 统一请求库

### 编码一致性:

- 统一目录结构
- 统一 ESM 模块规范
- 统一 TypeScript

### 规避常见错误:

- 禁止混用 CJS 和 ESM
- 禁用 eval, new Function 等
- 禁用依赖声明使用 \*
- 禁止使用未定义的变量

### 提升可维护性

- 禁止跨 group 或 page 引用
- 组件限 600 行
- 禁止流程语句嵌套三层以上

### 严格模式:

- 全面 TypeScript, 禁用 JavaScript
- 全面 FC, 禁用 Class Component
- 强制 tsc 校验

可以通过向 [此存储库](https://github.com/YernarT/react_template) 发 pr 来改进它。

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
- **Hooks:** `ahooks`
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
