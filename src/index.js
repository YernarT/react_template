/**
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { RecoilRoot } from 'recoil';

import App from './App';

ReactDOM.render(
	// 严格模式 检测错误
	<StrictMode>
		{/* Recoil 根组件 推荐放在这里 内部使用 React Context API 双向数据流 */}
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</StrictMode>,

	document.getElementById('root'),
);
