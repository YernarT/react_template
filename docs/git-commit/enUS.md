# Git commit specification

## 📐 commit message format:

`git commit -m <type>[optional scope]: <description>`

- type: used to describe the type of changes submitted, only the following flags are allowed
- optional scope: optional modification scope, used to identify which module in the code is mainly involved in the commit
- description: describe the main content of the submission, keep it concise, no more than 50 characters and no period

## 🧐 For example

- `feat: :sparkles: Added SafeArea component`
- `fix: :bug: Fixed the display problem of the submenu in the left navbar`
- `chore: :wrench: Added Hooks dependency -> ahooks`

<details><summary>View types</summary>
<p>

|   type   |         gitmoji          |                  description                   |
| :------: | :----------------------: | :--------------------------------------------: |
|   init   |        :rainbow:         |                 initialization                 |
|   feat   |        :sparkles:        |                  new features                  |
|   fix    |          :bug:           |                    fix bugs                    |
|  update  |         :hammer:         |                update something                |
|   wip    |      :construction:      |                 in development                 |
|  rename  |        :pencil2:         |              rename modification               |
|   perf   |          :zap:           | optimization related (performance, experience) |
|   docs   |         :books:          |             document modification              |
|  style   |       :nail_care:        |            code format modification            |
| refactor |        :recycle:         |                refactoring code                |
|   test   |    :white_check_mark:    |              test related changes              |
|  revert  |         :rewind:         |          rollback to previous version          |
| release  |         :trophy:         |              new semantic version              |
|    ci    | :vertical_traffic_light: |      continuous integration modifications      |
|  chore   |         :wrench:         |    project build or changes to dependencies    |
|   mod    |        :octocat:         |   indeterminate classification modification    |

</p>
</details>
