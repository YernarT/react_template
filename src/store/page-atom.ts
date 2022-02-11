import { atom } from 'recoil';
import { getLatestState, localStorage } from '@/utils';

export interface pageStateProperties {
	locale: string;
	viewMode: string;
}

export const defaultPageState: pageStateProperties = {
	// 界面语言, 默认为哈萨克语
	locale: 'kzKZ',
	// 获取用户设备的显示模式, 默认为暗黑模式
	viewMode:
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light',
};

const [isValid, state] = getLatestState(
	localStorage.get('page', {}),
	defaultPageState,
);

// LocalStorage内数据"过期"
if (!isValid) {
	localStorage.set('page', state);
}

export const pageAtom = atom({
	key: 'pageAtom',
	// default value, aka initial value
	default: localStorage.get('page', state),
});
