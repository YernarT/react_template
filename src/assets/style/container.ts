import { css } from 'styled-components';

export default css`
	padding-left:5rem;
	padding-right:5rem;
	margin: auto;

	@media screen and (max-width: 800px) {
		padding-left: 3rem;
		padding-right: 3rem;
	}

	@media screen and (max-width: 600px) {
		padding-left: 1.5rem;
		padding-right:  1.5rem;
	}

	@media screen and (max-width: 400px) {
		padding-left:0.75rem;
		padding-right:0.75rem;
	}
`;
