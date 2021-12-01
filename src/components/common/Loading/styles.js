/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import styled from 'styled-components';

export const LoadingContainer = styled.div`
	width: 100%;
	height: 100vh;

	background: ${({ viewMode }) =>
		viewMode === 'dark'
			? 'linear-gradient(90deg, #141e30, #243b55)'
			: 'linear-gradient(90deg, #2daee9, #509bf0)'};

	display: flex;
	justify-content: center;
	align-items: center;

	.spinner {
		color: ${({ viewMode }) => {
			if (viewMode === 'light') {
				return '#3a00ff';
			}
		}};

		span[class*='quick-start-react-spin-dot'] i {
			background-color: ${({ viewMode }) => {
				if (viewMode === 'light') {
					return '#3a00ff';
				}
			}};
		}
	}
`;
