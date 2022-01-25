import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<p>当前和: {count}</p>
			<button type="button" onClick={() => setCount(count => count + 1)}>
				点我加一
			</button>
		</div>
	);
}

export default App;
