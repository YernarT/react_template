import type { DefaultTheme } from 'styled-components';

import { css } from 'styled-components';

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

	typography: {
		color: 'rgba(0, 0, 0, 0.85)',
	},
};

export default theme;
