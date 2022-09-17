import styled from 'styled-components';

export const IntroduceStyledBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding-top: 40px;
	padding-bottom: 40px;

	@media screen and (max-width: 585px) {
		padding-top: 20px;
		padding-bottom: 20px;
	}

	.logo {
		width: 200px;
		height: 200px;
		object-fit: cover;
	}

	.bread {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 8px;

		margin: 20px 0 10px 0;
	}

	.title {
		text-align: center;
		margin-bottom: 20px;
	}
`;

export const I18nExampleStyledBox = styled.div`
	margin-top: 10px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.title {
		margin: 10px 0;
	}
`;
