/**
 * 授权相关 路由配置
 *
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */
import { lazy } from 'react';

import { sleep } from '@utils';
import { Role } from '@config/settings';

const authRouting = [
	{
		path: '/login',
		component: role =>
			lazy(async () => {
				// 不同的角色 可访问的页面 不一样
				// 假设只有 未登陆 的访客才能访问登陆
				switch (role) {
					case Role.guest:
						await sleep(360);
						return import('@pages/auth/LoginPage');
					default:
						await sleep(360);
						return import('@pages/common/PageNotFoundPage');
				}
			}),
	},
];

export default authRouting;
