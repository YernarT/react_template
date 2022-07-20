// 类型
import type { allowedLocale } from '@/i18n';
import type { themeMode } from '@/assets/theme/theme';

// 业务库
import { atom } from 'recoil';

// 工具函数
import { localStorage } from '@/utils';

export interface pageStateProperties {
	locale: allowedLocale;
	viewMode: themeMode;
}

export const defaultPageState: pageStateProperties = {
	// interface language, default is English
	locale: 'enUS',
	// get the display mode of the user's device
	viewMode:
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'DARK'
			: 'LIGHT',
};

const state = localStorage.get('page', defaultPageState);

export const pageAtom = atom({
	key: 'pageAtom',
	// default value, aka initial value
	default: state,
});
