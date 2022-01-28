import { BrowserRouter } from 'react-router-dom';
import { RouteGuard } from '@/components/common';
import routes from '@/routes/index';

function App() {
	return (
		<BrowserRouter>
			<RouteGuard routes={routes} />
		</BrowserRouter>
	);
}

export default App;
