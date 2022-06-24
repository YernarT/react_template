// 类型
import type { allowedLocale } from '@/i18n';
import type { themeMode } from '@/assets/theme/theme';

// 业务库
import { atom } from 'recoil';

// 工具函数
import { getLatestState, localStorage } from '@/utils';

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

const [isValid, state] = getLatestState<pageStateProperties>(
	localStorage.get('page', {}),
	defaultPageState,
);

// The data in LocalStorage is not as expected
if (!isValid) {
	localStorage.set('page', state);
}

export const pageAtom = atom({
	key: 'pageAtom',
	// default value, aka initial value
	default: state,
});
