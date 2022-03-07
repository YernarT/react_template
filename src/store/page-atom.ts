import { allowedLocale } from '#/locale';

import { atom } from 'recoil';
import { getLatestState, localStorage } from '@/utils';

export interface pageStateProperties {
	locale: allowedLocale;
	viewMode: 'light' | 'dark';
}

export const defaultPageState: pageStateProperties = {
	// interface language, default is English
	locale: 'enUS',
	// get the display mode of the user's device
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

// The data in LocalStorage is not as expected
if (!isValid) {
	localStorage.set('page', state);
}

export const pageAtom = atom({
	key: 'pageAtom',
	// default value, aka initial value
	default: localStorage.get('page', state) as pageStateProperties,
});
