/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import styled from 'styled-components';

export const LayoutTemplateContainer = styled.div`
	width: 100%;
	height: auto;

	// 对于使用此 LayoutTemplate组件 的页面 形成一个外壳
	// 使其相对于 LayoutTemplate 进行定位
	// 根据项目需求自行修改
	position: relative;
`;

export const NavbarContainer = styled.div`
	width: 100%;
	height: 46px;

	position: fixed;
	top: 0;
	left: 0;
	// assets 目录中 style -> theme 对象
	// 通过App.jsx 中 StyledThemeProviderd 获取
	z-index: ${({ theme }) => theme.zIndex.navbar};

	background-color: ${({ viewMode }) =>
		viewMode === 'dark' ? 'rgba(255, 255, 255, 0.64)' : 'rgba(0, 0, 0, 0.64)'};
	border-bottom: 2px solid
		${({ viewMode }) =>
			viewMode === 'dark' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'};

	display: flex;
	justify-content: center;
	align-items: center;

	.change-view-mode {
		margin-left: auto;

		cursor: pointer;
	}
`;
