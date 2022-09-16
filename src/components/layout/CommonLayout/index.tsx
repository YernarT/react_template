// React
import { memo } from 'react';

// 组件
import Header from './Header';
import Content from './Content';
// 样式组件
import { CommonLayoutStyledBox } from './style';

export default memo(function CommonLayout() {
	return (
		<CommonLayoutStyledBox>
			<Header />
			<Content />
		</CommonLayoutStyledBox>
	);
});
