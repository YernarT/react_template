import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { RecoilRoot } from 'recoil';

import App from './App';

ReactDOM.render(
	// 严格模式 检测错误
	<StrictMode>
		{/* Recoil根组件 推荐放在这里 内部使用React Context API 双向数据流 */}
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</StrictMode>,

	document.getElementById('root'),
);
