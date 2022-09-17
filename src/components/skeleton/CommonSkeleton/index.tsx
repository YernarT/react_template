import { Typography } from 'antd';

import { CommonSkeletonStyled } from './style';

export default function CommonSkeleton() {
	return (
		<CommonSkeletonStyled>
			<Typography.Title>Loading...</Typography.Title>
		</CommonSkeletonStyled>
	);
}
