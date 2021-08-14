import React, { useEffect } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

export default function RouteWithConfig({ config, jwt, userType }) {
	const { pathname } = useLocation();

	const targetConfig = config.find(conf => conf.path === pathname);

	// 解决React app切换路径时, 滚动条不被维护的bug
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// valid route
	if (targetConfig) {
		const verifiedAuth = targetConfig.auth.includes(Boolean(jwt));
		const allowPermission = targetConfig.permission.includes(userType);

		if (verifiedAuth && allowPermission) {
			return <Route path={pathname} component={targetConfig.page} />;
		}
		if (verifiedAuth && !allowPermission) {
			return <Redirect to="/404" />;
		}
		if (!verifiedAuth && allowPermission) {
			return <Redirect to="/login" />;
		}
		if (!verifiedAuth && !allowPermission) {
			return <Redirect to="/login" />;
		}
	} else {
		// invalid route
		return <Redirect to="/404" />;
	}
}
