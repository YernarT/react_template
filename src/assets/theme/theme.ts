import type {
	FlattenInterpolation,
	ThemeProps,
	DefaultTheme,
} from 'styled-components';

import 'styled-components';
import { css } from 'styled-components';

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
	}
}

type apply = () => FlattenInterpolation<ThemeProps<DefaultTheme>>;

const theme: DefaultTheme = {
	palette: {
		mode: 'LIGHT',
		primary: '#1890ff',
		secondary: 'rgba(150, 150, 150, 0.8)',
		error: '#f5222d',
		warning: '#faad14',
		success: '#52c41a',
		disabled: 'rgba(0, 0, 0, 0.25)',

		componentBackground: '#fff',
		backgroundColor: '#fff',
	},

	shape: {
		borderRadius: '4px',

		iconAppearance: {
			color: '#fff',
			fontSize: '1.5rem',

			apply: () => css`
				color: #fff;
				font-size: 1.5rem;
			`,
		},
	},
};

export default theme;
