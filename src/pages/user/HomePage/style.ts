import { styled } from '@mui/material';

export const Card = styled('div')(({ theme }) => ({
	padding: '20px 0',
	backgroundImage:
		theme.palette.mode === 'dark'
			? `linear-gradient(315deg, #42378f 0%, #f53844 74%)`
			: `linear-gradient(315deg, #90d5ec 0%, #fc575e 74%)`,

	'.title': {
		fontSize: '1.4rem',
	},
	'.text': {
		letterSpacing: '1px',
	},
}));
