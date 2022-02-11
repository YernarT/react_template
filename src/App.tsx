import { BrowserRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom, pageAtom } from '@/store';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { RouteGuard } from '@/components/common';
import routes from '@/routes';

import { useEventListener, useCreation } from 'ahooks';
import { localStorage, getLocale } from '@/utils';
import getTheme from '@/assets/theme';

function App() {
	// 全局状态
	const user = useRecoilValue(userAtom);
	const page = useRecoilValue(pageAtom);

	// 刷新页面 保存全局状态到本地, 用于下次打开页面时恢复
	useEventListener('beforeunload', () => {
		localStorage.set('user', user);
		localStorage.set('page', page);
	});

	const locale = useCreation(() => getLocale(page.locale), [page.locale]);
	const theme = useCreation(
		() => getTheme(locale.uiLocale, page.viewMode),
		[page],
	);

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<LocalizationProvider
					dateAdapter={AdapterDateFns}
					locale={locale.dateLocale}>
					<CssBaseline>
						<RouteGuard routes={routes} />
					</CssBaseline>
				</LocalizationProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
