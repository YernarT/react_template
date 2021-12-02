/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import React from 'react';

import { useRecoilValue } from 'recoil';
import { pageAtom } from '@recoil';

import { use1vh } from 'src/hooks';
import { i18nTranslate } from '@i18n';

import {
	LayoutTemplateContainer,
	NavbarContainer,
	Content,
	FooterContainer,
} from './styles';

export default function LayoutTemplate({ children }) {
	const page = useRecoilValue(pageAtom);
	const oneVh = use1vh();

	return (
		<LayoutTemplateContainer viewMode={page.viewMode} oneVh={oneVh}>
			<Navbar page={page} />

			<Content viewMode={page.viewMode}>{children}</Content>
			<Footer page={page} />
		</LayoutTemplateContainer>
	);
}

// 此处只是一个案例, 真实开发可以拆分文件编写
function Navbar({ page }) {
	return (
		<>
			<NavbarContainer viewMode={page.viewMode}>
				<h1 className="title">Quick start for React | comprehensive</h1>
			</NavbarContainer>
		</>
	);
}

// 此处只是一个案例, 真实开发可以拆分文件编写
function Footer({ page }) {
	return (
		<FooterContainer viewMode={page.viewMode}>
			<h2 className="title">
				Quick start for React ©2021{' '}
				{i18nTranslate('Created by IT IS IT Studio', page.locale)}
			</h2>
		</FooterContainer>
	);
}
