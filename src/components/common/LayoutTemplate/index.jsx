/**
 *
 * 此处只是一个栗子 🌰
 * 根据项目需求自行修改
 * 有更好的意见可以提 issue, pr
 */

import React from 'react';

import { useRecoilState } from 'recoil';
import { pageAtom } from '@recoil';

import { LayoutTemplateContainer, NavbarContainer } from './styles';

export default function LayoutTemplate({ children }) {
	const [page, setPage] = useRecoilState(pageAtom);

	// 切换显示模式, 简单的案例
	// 根据项目需求自行修改
	const handleChangeViewMode = viewMode => {
		setPage(Object.assign({}, page, { viewMode }));
	};

	return (
		<LayoutTemplateContainer viewMode={page.viewMode}>
			<Navbar viewMode={page.viewMode} changeViewMode={handleChangeViewMode} />
			{children}
		</LayoutTemplateContainer>
	);
}

//
function Navbar({ viewMode, changeViewMode }) {
	return (
		<NavbarContainer viewMode={viewMode}>
			<h1>Navbar</h1>
			<p
				className="change-view-mode"
				onClick={() => {
					if (viewMode === 'dark') {
						changeViewMode('light');
					} else {
						changeViewMode('dark');
					}
				}}>
				点击切换 view mode
			</p>
		</NavbarContainer>
	);
}
