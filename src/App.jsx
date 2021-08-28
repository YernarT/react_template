import React, { useCallback } from "react";
import { BrowserRouter } from "react-router-dom";

import {
	ConfigProvider as AntdConfigProvider,
	message,
	notification,
} from "antd";
import { RouteWithConfig } from "@components";

import { routingConfig } from "@config";
import { useAntdLocale, useEventListener } from "@hooks";

import { localStorage } from "@utils";

import { useRecoilValue } from "recoil";
import { userAtom, pageAtom } from "@recoil";

import "@assets/style/normalize.less";
import "@assets/style/antd.less";

// Antd message component global config
message.config({
	top: 8,
	duration: 3,
	maxCount: 4,
	rtl: false,
	prefixCls: "react-app-template-message",
	getContainer: () => document.body,
});

// Antd notification component global config
notification.config({
	placement: "bottomRight",
	top: 24,
	bottom: 24,
	duration: 4.5,
	rtl: false,
	prefixCls: "react-app-template-notification",
	getContainer: () => document.body,
});

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
