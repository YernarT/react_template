/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

/**
 * 引入顺序规则如下 (仅推荐)
 * 1. React相关库 以React核心库为首
 * 2. React周边库 比如 Redux, Recoil等
 * 3. 第三方组件库 比如 MaterialUI, Antd等
 * 4. 自己封装的组件 components目录
 * 5. 第三方Hook库 比如 react-hooks, ahooks
 * 6. 自己封装的Hook hooks目录
 * 7. API 函数
 * 8. Util 工具函数, config配置 (若导入过多, 可分层)
 * 9. 资源文件, 比如 assets目录
 * 10. 其他
 *
 * 不同层级(序号)之间用空行分隔
 */
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
