import styled from 'styled-components';
// 公共样式
import { container } from '@/assets/style';

export const ContentStyledBox = styled.main`
	height: calc(100% - 72px);
	background: ${({ theme }) =>
		theme.palette.mode === 'DARK' ? '#000' : theme.palette.backgroundColor};

	position: relative;
	top: 72px;

	overflow: hidden auto;

	/* 方便子节点使用 width: 100% 布局 */
	& > * {
		${container};
		height: 100%;
		overflow: inherit;
	}
`;
