import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import {
	ConfigProvider as AntdConfigProvider,
	message,
	notification,
} from "antd";

import { routingConfig } from "@config";
import { useAntdLocale, useBeforeunload, useConsole } from "@hooks";
import { RouteWithConfig } from "@components";

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
	const {
		user,
		page,
		user: { jwt, userType },
		page: { locale },
	} = useSelector(state => state);

	// Refresh the page to save the data in Redux to LocalStorage
	useBeforeunload({ user, page });

	// Print ads infor to the console panel
	useConsole();

	return (
		<AntdConfigProvider
			locale={useAntdLocale(locale)}
			prefixCls="react-app-template">
			<BrowserRouter>
				<RouteWithConfig config={routingConfig} userType={userType} jwt={jwt} />
			</BrowserRouter>
		</AntdConfigProvider>
	);
}
