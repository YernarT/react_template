import { atom } from 'recoil';
import { localStorage } from '@/utils';

export const pageAtom = atom({
	key: 'pageAtom',
	// default value, aka initial value
	default: localStorage.get('page', {
		// 界面语言, 默认为哈萨克语
		locale: 'kkKZ',
		// 获取用户设备的显示模式, 默认为暗黑模式
		viewMode:
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light',
	}),
});
