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
	// global state
	const user = useRecoilValue(userAtom);
	const page = useRecoilValue(pageAtom);

	// Refresh the page and save the global state to the local for restoring the next time the page is opened
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
