# [React App Template](https://it-is-it.web.app/docs/react-app-template) &middot; v0.2.0

React App Template is a standard for building react project.

**Comprehensive:** Created more structures used in actual projects, like: _components_, _pages_, _hooks_, _recoil_, _i18n_, etc, reduce repetitive work and start projects quickly.

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
// index.js
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import { RecoilRoot } from "recoil";

import App from "./App";

ReactDOM.render(
	<StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</StrictMode>,
	document.getElementById("root"),
);
```

Almost every project will use state management tool, this code will put recoil on your react app.

```jsx
// App.jsx
import React, { useCallback } from "react";
import { BrowserRouter } from "react-router-dom";

import { ConfigProvider as AntdConfigProvider } from "antd";
import { RouteWithConfig } from "@components";

import { routingConfig } from "@config";
import { useAntdLocale, useEventListener } from "@hooks";

import { localStorage } from "@utils";

import { useRecoilValue } from "recoil";
import { userAtom, pageAtom } from "@recoil";

import "@assets/style/normalize.less";
import "@assets/style/antd.less";

export default function App() {
	const user = useRecoilValue(userAtom);
	const page = useRecoilValue(pageAtom);

	// Refresh the page to save the data in Recoil to LocalStorage
	const handleBeforeunload = useCallback(() => {
		Object.entries({ user, page }).forEach(([key, value]) => {
			localStorage.set(key, value);
		});
	}, [user, page]);

	useEventListener("beforeunload", handleBeforeunload);

	return (
		<AntdConfigProvider
			locale={useAntdLocale(page.locale)}
			prefixCls="react-app-template">
			<BrowserRouter>
				<RouteWithConfig
					config={routingConfig}
					userType={user.userType}
					jwt={user.jwt}
				/>
			</BrowserRouter>
		</AntdConfigProvider>
	);
}
```

Initialize the app, this code will initialize routing, persistent state management, internationalization and antd global style configuration.

## Features

**Recent**

- Add _commitlint_

**Long-term**

- refactor by _TypeScript_

## Project basic pages

|   URL    |      Page      |         Desc          |
| :------: | :------------: | :-------------------: |
|   `/`    |   User Home    |    User home page     |
| `/login` |     Login      |      Login page       |
|  `/404`  | Page not found | "Page not found" page |

### License

React App Template is [MIT licensed](./LICENSE).
