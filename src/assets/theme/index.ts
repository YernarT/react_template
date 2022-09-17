import type {
	FlattenInterpolation,
	ThemeProps,
	DefaultTheme,
} from 'styled-components';

import 'styled-components';

export type themeMode = 'LIGHT' | 'DARK';

declare module 'styled-components' {
	export interface DefaultTheme {
		palette: {
			mode: themeMode;
			primary: string;
			secondary: string;
			error: string;
			warning: string;
			success: string;
			disabled: string;

			componentBackground: string;
			backgroundColor: string;
		};

		shape: {
			borderRadius: string;
			iconAppearance: {
				color: string;
				fontSize: string;

				apply: apply;
			};
		};

		typography: {
			color: string;
		};
	}
}

type apply = () => FlattenInterpolation<ThemeProps<DefaultTheme>>;

import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

export const getTheme = (theme: themeMode) =>
	theme === 'DARK' ? darkTheme : lightTheme;
