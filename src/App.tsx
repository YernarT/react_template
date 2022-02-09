import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { kzKZ } from '@mui/material/locale';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { kk } from 'date-fns/locale';

import { RouteGuard } from '@/components/common';
import routes from '@/routes';

const theme = createTheme(
	{
		palette: {
			mode: 'dark',
		},
	},
	kzKZ,
);

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<LocalizationProvider dateAdapter={AdapterDateFns} locale={kk}>
						<CssBaseline>
							<RouteGuard routes={routes} />
						</CssBaseline>
					</LocalizationProvider>
				</ThemeProvider>
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
