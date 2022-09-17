// React & 周边库
import { BrowserRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom, pageAtom } from '@/store';

// 业务库
import { useEventListener, useCreation } from 'ahooks';

// 工具函数
import { localStorage, getAntdLocale } from '@/utils';
import { theme } from '@/assets/theme';

// 组件
import {
	ConfigProvider as AntdConfigProvider,
	message,
	notification,
} from 'antd';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CssBaseLine } from '@/components/common';
import { CommonLayout } from '@/components/layout';

// 配置 message
message.config({
	maxCount: 4,
});
// 配置 notification
notification.config({
	maxCount: 3,
});

function App() {
	// global state
	const user = useRecoilValue(userAtom);
	const page = useRecoilValue(pageAtom);

	// Refresh the page and save the global state to the local for restoring the next time the page is opened
	useEventListener('beforeunload', () => {
		localStorage.set('user', user);
		localStorage.set('page', page);
	});

	// 广告
	// useAd();

	const antdLocale = useCreation(
		() => getAntdLocale(page.locale),
		[page.locale],
	);

	return (
		<BrowserRouter>
			<StyledThemeProvider theme={theme}>
				<AntdConfigProvider locale={antdLocale}>
					<CssBaseLine />
					<CommonLayout />
				</AntdConfigProvider>
			</StyledThemeProvider>
		</BrowserRouter>
	);
}

export default App;
