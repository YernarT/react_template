import type { Localization } from '@mui/material/locale';

import { createTheme } from '@mui/material/styles';
import { default as lightTheme } from './light-theme';
import { default as darkTheme } from './dark-theme';

export default function getTheme(
	uiLocale: Localization,
	viewMode: 'light' | 'dark',
) {
	return viewMode === 'dark'
		? createTheme(darkTheme, uiLocale)
		: createTheme(lightTheme, uiLocale);
}
