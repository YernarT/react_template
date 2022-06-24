import styled from 'styled-components';

export const SafeAreaStyleBox = styled('div')<{ vh: number | null }>(
	({ vh }) => ({
		width: '100%',
		height: vh ? 100 * vh : '100vh',
	}),
);
