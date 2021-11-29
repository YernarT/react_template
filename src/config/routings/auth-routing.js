/**
 * 授权相关 路由配置
 *
 * 此处只是一个栗子 🌰
 * 根据项目需求自行修改
 * 有更好的意见可以提 issue, pr
 */
import { lazy } from 'react';

import { Role } from '@config/settings';

const authRouting = [
	{
		path: '/login',
		component: role =>
			lazy(() => {
				// 不同的角色 可访问的页面 不一样
				// 假设只有 未登陆 的访客才能访问登陆
				switch (role) {
					case Role.guest:
						return import('@pages/auth/LoginPage');
					default:
						return import('@pages/common/PageNotFoundPage');
				}
			}),
	},
];

export default authRouting;
