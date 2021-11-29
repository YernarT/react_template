/**
 * comprehensive版本 核心组件之一
 * 根据config中的routingConfig返回对应路由
 * 配合后端的 RBAC 场景
 *
 * 此处只是一个栗子 🌰
 * 根据项目需求自行修改
 * 有更好的意见可以提 issue, pr
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
