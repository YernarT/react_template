/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import styled, { css } from 'styled-components';

/**
 *
 * @param {'margin'|'padding'} spaceType
 * 空间类型
 *
 * @returns {Object}
 * 返回响应式空间对象
 */
const responsiveSpace = spaceType => css`
	@media screen and (min-width: 1230px) {
		${spaceType === 'margin'
			? `
			margin: 30px 15%;
			margin-bottom: 0;`
			: `
			padding: 30px 15%;
			padding: 0;`}
	}
	@media screen and (min-width: 920px) {
		${spaceType === 'margin'
			? `
			margin: 26px 12%;
			margin-bottom: 0;`
			: `
			padding: 26px 12%;
			padding: 0;`}
	}
	@media screen and (min-width: 585px) {
		${spaceType === 'margin'
			? `
			margin: 22px 8%;
			margin-bottom: 0;`
			: `
			padding: 22px 8%;
			padding: 0;`}
	}
	@media screen and (max-width: 585px) {
		${spaceType === 'margin'
			? `
			margin: 18px 6%;
			margin-bottom: 0;`
			: `
			padding: 18px 6%;
			padding: 0;`}
	}
`;

export const LayoutTemplateContainer = styled.div`
	width: 100%;
	// 解决移动端浏览器无法正常显示100vh的问题
	height: ${({ oneVh }) => {
		if (oneVh) {
			return `${100 * oneVh}px`;
		} else {
			return '100vh';
		}
	}};

	// 对于使用此 LayoutTemplate组件 的页面 形成一个外壳
	// 使其相对于 LayoutTemplate 进行定位
	// 根据项目需求自行修改
	position: relative;

	overflow: hidden;

	// assets 目录中 style -> theme 对象
	// 通过App.jsx 中 StyledThemeProviderd 获取
	background: ${({ viewMode }) =>
		viewMode === 'dark'
			? 'linear-gradient(90deg, #141e30, #243b55)'
			: 'linear-gradient(90deg, #2daee9, #509bf0)'};

	display: grid;
	grid-template-rows: 64px 1fr 46px;
	grid-template-columns: 1fr;
`;

export const NavbarContainer = styled.div`
	box-shadow: 0 2px 16px
		${({ viewMode }) => (viewMode === 'dark' ? '#002373' : '#007ad1')};

	display: flex;
	justify-content: center;
	align-items: center;

	${responsiveSpace('padding')}

	transition: margin 0.3s ease;

	.title {
		${({ viewMode, theme }) => theme.typography.title(viewMode)};
	}

	.change-view-mode {
		/* margin-left: auto;

		cursor: pointer; */
	}
`;

export const Content = styled.main`
	background-color: ${({ viewMode }) =>
		viewMode === 'dark' ? '#1b335f' : 'rgba(255, 255, 255, 0.14)'};

	overflow: hidden auto;

	${responsiveSpace('margin')}

	transition: margin 0.3s ease;
`;

export const FooterContainer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 0 5px;

	overflow: hidden;

	.title {
		${({ viewMode, theme }) => theme.typography.title(viewMode)};
		font-size: 0.89rem;
		font-weight: ${({ viewMode, theme }) =>
			theme.typography.text(viewMode).fontWeight};

		text-overflow: ellipsis;
		overflow: hidden;
	}
`;
