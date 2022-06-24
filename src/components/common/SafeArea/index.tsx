// 类型
import type { ReactNode } from 'react';
// React
import { memo } from 'react';
// Hook
import { useVh } from '@/hooks';
// 样式组件
import { SafeAreaStyleBox } from './style';

// 定义组件Props类型
interface SafeAraeProps {
	children: ReactNode;
}

export default memo(function SafeArea({ children }: SafeAraeProps) {
	const vh = useVh();

	return <SafeAreaStyleBox vh={vh}>{children}</SafeAreaStyleBox>;
});
