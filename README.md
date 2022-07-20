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

> [Chinese / 中文](./README.zhCN.md) <br /> The `React (CSR, SPA)` architectural scheme used in front-end web projects.

---

## Install & Use

1. From the [github repo](https://github.com/YernarT/react_template) `clone` or `use`.

2. Install dependencies (recommended pnpm) `pnpm install`

   Run the project `pnpm dev`

3. Happy hacking :)

## Minimalistic documentation

The original design intention of this template is to use the same architecture scheme and code specification to reduce the mental burden of developers when developing multiple projects.

**Features:**

- Full `TypeScript`, disable `JavaScript`
- Full `FC`, disable `Class Component`

It can be improved by making a pull request to [this repository](https://github.com/YernarT/react_template).

Read about the specifications for issues and pr [here]().

## Git commit specification

`git commit -m <type>[optional scope]: <description>`

- type: used to describe the type of changes submitted, only the following flags are allowed
- optional scope: optional modification scope, used to identify which module in the code is mainly involved in the commit
- description: describe the main content of the submission, keep it concise, no more than 50 characters and no period

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

---

## ⛔️ Import specification

> Follow the import specification to keep the code readable

```typescript
// Introduce the type to be uniformly escalated to the highest
// ⚠️ Import types use "import type"
import type { Plugin } from 'vite'
import type { ReactElement } from 'react';

// Framework related
import React from "react";
import { Link } from "react-router-dom":

// Components (preferably UI library components)
import { Button, Box } from '@mui/material';
import { RouteGuard } from "@/components"

// Methods
import { useRequest } from 'ahooks'
import { use1vh } from '@/hooks'
import { sleep } from '@/utils'

// Static files
import defaultUserAvatar from  "@/assets/images/default-user-avatar.png"
// Styles
import "xxx.less || xxx.css ....";
import cssStyle from "xxx.module.css";

```

## Technology stack

- **Node:** `node.js 16.13.0`
- **React:** `react ^17.0.2`
- **Language:** `type script ^4.4.4`
- **Build tools:** `vite ^2.7.2`
- **Package management tool:** `pnpm 6.28.0`
- **UI components:** `material design 5`
- **Request:** `axios ^3.1.9`
- **State management:** `recoil ^0.6.1`
- **Style editor:** `emotion ^11.7.1`
- **Hooks:** `ahooks ^3.1.9`
- **Globalization:** `i18next ^21.6.11`
- **Format:** `prettier ^2.5.1`
- **Grammer check:** `eslint ^8.7.0`
- **Dev server:** `json-server ^0.17.0`

## Future plan

- Implement the _сommitlint_ standard.
- Upgrade `react-router-dom v6`
- Add _Unit Test_ test
- Upgrade _React18_ version

## 🟢 Browser support

Supports all modern browsers

Recommended local development browser: `Chrome 80+`

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                           |

## License

**React Template** is [MIT License](./LICENSE).
