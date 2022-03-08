import { styled } from '@mui/material';

export const SafeAreaStyleBox = styled('div')<{ vh: number | null }>(
	({ vh }) => ({
		width: '100%',
		height: vh ? 100 * vh : '100vh',
	}),
);
