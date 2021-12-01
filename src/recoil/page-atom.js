/**
 * 页面相关的 全局状态
 *
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import { atom } from 'recoil';
import { localStorage } from '@utils';

export const pageAtom = atom({
	key: 'pageAtom',
	// 默认值
	default: localStorage.get('page', {
		// 默认英语
		locale: 'en-US',
		// 获取用户设备的模式, 默认为暗黑模式
		viewMode:
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light',
	}),
});
