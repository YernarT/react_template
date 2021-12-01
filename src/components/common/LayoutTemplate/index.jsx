/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import React from 'react';

import { useRecoilState } from 'recoil';
import { pageAtom } from '@recoil';

import { use1vh } from 'src/hooks';

import {
	LayoutTemplateContainer,
	NavbarContainer,
	Content,
	FooterContainer,
} from './styles';

export default function LayoutTemplate({ children }) {
	const [page, setPage] = useRecoilState(pageAtom);
	const oneVh = use1vh();

	// 切换显示模式, 简单的案例
	// 根据项目需求自行修改
	const handleChangeViewMode = viewMode => {
		setPage(Object.assign({}, page, { viewMode }));
	};

	return (
		<LayoutTemplateContainer viewMode={page.viewMode} oneVh={oneVh}>
			<Navbar viewMode={page.viewMode} changeViewMode={handleChangeViewMode} />

			<Content viewMode={page.viewMode}>{children}</Content>
			<Footer viewMode={page.viewMode} />
		</LayoutTemplateContainer>
	);
}

// 此处只是一个案例, 真实开发可以拆分文件编写
function Navbar({ viewMode, changeViewMode }) {
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
