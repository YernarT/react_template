/**
 * comprehensive版本 核心功能之一
 *
 * 根据 config 中的 routingConfig 返回对应路由
 * 配合后端的 RBAC 场景
 *
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import React, { useMemo } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

// 根据项目需求可以编写自己的路由逻辑
export default function RouteWithConfig({ config, role }) {
	const { pathname } = useLocation();

	// 根据页面路径获取对应配置对象
	const targetConfig = useMemo(
		() => config.find(conf => conf.path === pathname),
		[pathname, config],
	);

	// 解决React app切换路径时, 滚动条不被维护的bug
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	//  路由已注册
	if (targetConfig) {
		// 根据配置对象返回对应路由的组件
		return <Route path={pathname} component={targetConfig.component(role)} />;
	} else {
		// 路由未注册
		// 重定向 404
		return <Redirect to="/404" />;
	}
}
