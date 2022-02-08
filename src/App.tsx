import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { RouteGuard } from '@/components/common';
import routes from '@/routes';

const theme = createTheme({
	palette: {
		primary: {
			main: '#f42160',
		},
	},
});

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<RouteGuard routes={routes} />
				</ThemeProvider>
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
