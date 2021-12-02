/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import React from 'react';

import { useRecoilState } from 'recoil';
import { pageAtom } from '@recoil/page-atom';

import { Switch, Space } from 'antd';
import { LayoutTemplate } from '@components/common';

export default function HomePage() {
	const [page, setPage] = useRecoilState(pageAtom);

	return (
		<LayoutTemplate>
			<Space>
				<Switch
					checkedChildren="Dark"
					unCheckedChildren="Light"
					onClick={() => {
						setPage(
							Object.assign({}, page, {
								viewMode: page.viewMode === 'dark' ? 'light' : 'dark',
							}),
						);
					}}
					defaultChecked={page.viewMode === 'dark'}
				/>

				<Switch
					checkedChildren="ENG"
					unCheckedChildren="中"
					onClick={() => {
						setPage(
							Object.assign({}, page, {
								locale: page.locale === 'en-US' ? 'zh-CN' : 'en-US',
							}),
						);
					}}
					defaultChecked={page.locale === 'en-US'}
				/>
			</Space>
		</LayoutTemplate>
	);
}
