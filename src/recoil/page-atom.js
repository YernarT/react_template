/**
 * 页面显示相关 全局状态
 *
 * 欢迎大佬的 issue, pr
 * Github地址: https://github.com/YernarT/react_architecture
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
