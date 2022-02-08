import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { RouteGuard } from '@/components/common';
import routes from '@/routes';

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<RouteGuard routes={routes} />
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
