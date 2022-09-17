import type { DefaultTheme } from 'styled-components';

import { css } from 'styled-components';

const theme: DefaultTheme = {
	palette: {
		mode: 'DARK',
		primary: '#7400ff',
		secondary: 'rgba(150, 150, 150, 0.8)',
		error: '#f5222d',
		warning: '#faad14',
		success: '#52c41a',
		disabled: 'rgba(0, 0, 0, 0.25)',

		componentBackground: 'rgba(0, 0, 0, 0.85)',
		backgroundColor: 'rgba(0, 0, 0, 0.85)',
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

	typography: {
		color: '#fff',
	},
};

export default theme;
