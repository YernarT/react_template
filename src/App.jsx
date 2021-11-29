import React, { useCallback, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { userAtom, pageAtom } from '@recoil';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {
	ConfigProvider as AntdConfigProvider,
	message,
	notification,
} from 'antd';
import { RouteWithConfig, Loading } from '@components/common';

import { useEventListener } from 'ahooks';
import { useAntdLocale } from '@hooks';
import { localStorage } from '@utils';
import { routingConfig } from '@config';

import theme from '@assets/style/theme';
import '@assets/style/customize.less';
import '@assets/style/antd.less';

// Antd message component global config
message.config({
	top: 8,
	duration: 3,
	maxCount: 4,
	rtl: false,
	prefixCls: 'quick-start-react-message',
	getContainer: () => document.body,
});

// Antd notification component global config
notification.config({
	placement: 'bottomRight',
	top: 24,
	bottom: 24,
	duration: 4.5,
	rtl: false,
	prefixCls: 'quick-start-react-notification',
	getContainer: () => document.body,
});

export default function App() {
	const user = useRecoilValue(userAtom);
	const page = useRecoilValue(pageAtom);

	// Refresh the page to save the data in Recoil to LocalStorage
	const handleBeforeunload = useCallback(() => {
		Object.entries({ user, page }).forEach(([key, value]) => {
			localStorage.set(key, value);
		});
	}, [user, page]);

	useEventListener('beforeunload', handleBeforeunload);

	return (
		<StyledThemeProvider theme={theme}>
			<AntdConfigProvider
				locale={useAntdLocale(page.locale)}
				prefixCls="quick-start-react">
				<BrowserRouter>
					<Suspense fallback={<Loading />}>
						<RouteWithConfig config={routingConfig} />
					</Suspense>
				</BrowserRouter>
			</AntdConfigProvider>
		</StyledThemeProvider>
	);
}
