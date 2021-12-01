/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import React from 'react';

import { Spin } from 'antd';

import { LoadingContainer } from './styles';

export default function Loading() {
	return (
		<LoadingContainer>
			<Spin tip="加载中..." size="large" />
		</LoadingContainer>
	);
}
