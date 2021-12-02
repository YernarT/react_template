/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import React from 'react';

import { useRecoilValue } from 'recoil';
import { pageAtom } from '@recoil';

import { use1vh } from 'src/hooks';

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
			<Navbar viewMode={page.viewMode} />

			<Content viewMode={page.viewMode}>{children}</Content>
			<Footer viewMode={page.viewMode} />
		</LayoutTemplateContainer>
	);
}

// 此处只是一个案例, 真实开发可以拆分文件编写
function Navbar({ viewMode }) {
	return (
		<>
			<NavbarContainer viewMode={viewMode}>
				<h1 className="title">Quick start for React | comprehensive</h1>

				{/* <p
					className="change-view-mode"
					onClick={() => {
						if (viewMode === 'dark') {
							changeViewMode('light');
						} else {
							changeViewMode('dark');
						}
					}}>
					点击切换 view mode
				</p> */}
			</NavbarContainer>
		</>
	);
}

// 此处只是一个案例, 真实开发可以拆分文件编写
function Footer({ viewMode }) {
	return (
		<FooterContainer viewMode={viewMode}>
			<h2 className="title">
				Quick start for React ©2021 Created by IT IS IT Studio
			</h2>
		</FooterContainer>
	);
}
