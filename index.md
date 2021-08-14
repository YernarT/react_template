# [React App Template](https://it-is-it.web.app/docs/react-app-template) &middot; v0.1.1

React App Template is a standard for building react project.

**Comprehensive:** Created more structures used in actual projects, like: _components_, _pages_, _hooks_, _redux_, _i18n_, etc, reduce repetitive work and start projects quickly.

**Scalable:** It is not a fixed structure, it can be reduced or added according to the actual needs of the project.

**Maintained:** The architecture is used by many of our real projects, and the architecture will be updated every once in a while, and the issues raised by the community will also be noted and resolved.

[Learn how to use React App Template in your own project](https://it-is-it.web.app/docs/react-app-template/getting-started).

## Installation

- From [github repository](https://github.com/YernarT/react-app-template).

## Documentation

React App Template has been designed from the very beginning as a situation where multiple projects are developed at the same time.

You can find the React App Template documentation [on the website](https://it-is-it.web.app/docs).

Check out the [Getting Started](https://it-is-it.web.app/docs/react-app-template/getting-started) page for a quick overview.

You can improve it by sending pull requests to [this repository](https://github.com/YernarT/react-app-template).

## Examples

```jsx
import React from "react";
import ReactDOM from "react-dom";

import { Provider as ReduxProvider } from "react-redux";
import reduxStore from "@redux/store";

import App from "./App";

ReactDOM.render(
	<ReduxProvider store={reduxStore}>
		<App />
	</ReduxProvider>,
	document.getElementById("root"),
);
```

Almost every project will use redux, this code will put redux on your react app.

## Features

**Recent**

- Add _commitlint_

**Long-term**

- refactor by _TypeScript_

## Project structure

Folders and files other than those created by [CRA](https://reactjs.org/docs/create-a-new-react-app.html).

|          Folder          |                                Desc                                 |
| :----------------------: | :-----------------------------------------------------------------: |
|       **src/api**        |                         Project api folder                          |
|   **src/api/ajax.js**    |                    Encapsulate the axios library                    |
|  **src/api/\*-api.js**   |                     APIs of various components                      |
|         **---**          |                                 ---                                 |
|      **src/assets**      |                       Style, media files, etc                       |
|         **---**          |                                 ---                                 |
|    **src/components**    |           Various components, export in the index.js file           |
|         **---**          |                                 ---                                 |
|      **src/pages**       |             Various pages, export in the index.js file              |
|         **---**          |                                 ---                                 |
|      **src/hooks**       |             Various hooks, export in the index.js file              |
|         **---**          |                                 ---                                 |
|      **src/redux**       |                 Create redux store, action, reducer                 |
|         **---**          |                                 ---                                 |
|      **src/config**      |                    Craco config and route config                    |
|         **---**          |                                 ---                                 |
|       **src/data**       |              Various data, export in the index.js file              |
|         **---**          |                                 ---                                 |
|       **src/util**       |              Various util, export in the index.js file              |
|         **---**          |                                 ---                                 |
|       **src/i18n**       | Internationalized folder, save translation files in messages folder |
|         **---**          |                                 ---                                 |
|         **.env**         |                          Environment file                           |
|    **jsconfig.json**     |                     VSCode config file (Alias)                      |
|         **---**          |                                 ---                                 |
|     **eslintrc.js**      |                         Eslint config file                          |
|    **eslintrignore**     |                         Eslint ignore file                          |
|    **prettierrc.js**     |                        Prettier config file                         |
|    **prettierignore**    |                        Prettier ignore file                         |
| **commitlint.config.js** |                       Commitlint config file                        |
|         **---**          |                                 ---                                 |
|       **LICENSE**        |                            License file                             |
|         **---**          |                                 ---                                 |

---

## Project basic pages

|   URL    |      Page      |         Desc          |
| :------: | :------------: | :-------------------: |
|   `/`    |   User Home    |    User home page     |
| `/login` |     Login      |      Login page       |
|  `/404`  | Page not found | "Page not found" page |

### License

React App Template is [MIT licensed](./LICENSE).