import { styled, css } from '@mui/material';

export const IntroduceStyledBox = styled('div')(
	() => css`
		display: flex;
		flex-direction: column;
		align-items: center;

		height: inherit;
		padding: 20px 10px;

		.logo {
			width: 200px;
			height: 200px;
			margin-bottom: 25px;

			object-fit: cover;
		}

		.bread {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: 6.5px;
		}

		.title {
			text-align: center;
		}
	`,
);
