// React
import { memo } from 'react';

// 组件
import { RouteGuard } from '@/components/common';
// 样式组件
import { ContentStyledBox } from './style';

// 其他资源
import routes from '@/routes';

export default memo(function Content() {
	return (
		<ContentStyledBox>
			<RouteGuard routes={routes} />
		</ContentStyledBox>
	);
});
