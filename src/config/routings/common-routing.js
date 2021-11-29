/**
 * 公共路由配置
 *
 * 此处只是一个栗子 🌰
 * 根据项目需求自行修改
 * 有更好的意见可以提 issue, pr
 */

import { lazy } from 'react';

import { sleep } from '@utils';

const commonRouting = [
	{
		path: '/404',
		component: () =>
			lazy(async () => {
				// 延迟返回, 可以有效防止切换页面时的闪屏(加载Loading组件, 随后迅速卸载)
				// 根据项目需求更改时间或移除
				await sleep(500);
				return import('@pages/common/PageNotFoundPage');
			}),
	},
];

export default commonRouting;
