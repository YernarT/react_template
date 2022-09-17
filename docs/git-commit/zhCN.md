# Git 提交规范

## 📐 commit 信息格式:

`git commit -m <type>[optional scope]: <description>`

- type: 用于说明提交的改动类型, 只允许使用以下标识
- optional scope: 可选的修改范围, 用于标识提交主要涉及到代码中哪个模块
- description: 描述提交的主要内容, 做到言简意赅, 不超过 50 字符且不加句号

## 🌰 举个栗子

- `feat: :sparkles: 新增 SafeArea 组件`
- `fix: :bug: 修复 左侧导航栏子菜单显示问题`
- `chore: :wrench: 新增 Hooks 依赖 -> ahooks`

<details><summary>查看类型标识</summary>
<p>

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

</p>
</details>
