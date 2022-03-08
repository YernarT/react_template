import type { ReactNode } from 'react';

import { memo } from 'react';
import { useVh } from '@/hooks';

import { SafeAreaStyleBox } from './style';

interface SafeAraeProps {
	children: ReactNode;
}

export default memo(function SafeArea({ children }: SafeAraeProps) {
	const vh = useVh();

	return <SafeAreaStyleBox vh={vh}>{children}</SafeAreaStyleBox>;
});
