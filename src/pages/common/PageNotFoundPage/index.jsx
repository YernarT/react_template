/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import React from 'react';
import { useHistory } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { pageAtom } from '@recoil/page-atom';

import { Result, Button } from 'antd';

import { i18nTranslate } from '@i18n';

import { LayoutTemplate } from '@components/common';

export default function PageNotFoundPage() {
	const page = useRecoilValue(pageAtom);
	const history = useHistory();

	return (
		<LayoutTemplate>
			<Result
				status="404"
				title="404"
				subTitle={i18nTranslate(
					'Sorry, the page you visited does not exist.',
					page.locale,
				)}
				extra={
					<Button type="primary" onClick={() => history.push('/')}>
						{i18nTranslate('Back Home', page.locale)}
					</Button>
				}
			/>
		</LayoutTemplate>
	);
}
