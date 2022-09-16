import { css } from 'styled-components';

export default css`
	padding: 0 5rem;
	margin: auto;

	@media screen and (max-width: 800px) {
		padding: 0 3rem;
	}

	@media screen and (max-width: 600px) {
		padding: 0 1.5rem;
	}

	@media screen and (max-width: 400px) {
		padding: 0 0.75rem;
	}
`;
