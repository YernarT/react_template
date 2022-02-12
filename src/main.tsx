import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enUS, kkKZ, zhCN } from '@/i18n';

import { getLatestState, localStorage } from '@/utils';
import { defaultPageState } from '@/store';

import App from './App';

// 初始化语言, 从 LocalStorage 获取
const [_, state] = getLatestState(
	localStorage.get('page', {}),
	defaultPageState,
);

i18next.use(initReactI18next).init({
	resources: {
		enUS: {
			translation: enUS,
		},
		kkKZ: {
			translation: kkKZ,
		},
		zhCN: {
			translation: zhCN,
		},
	},
	lng: state.locale,
	// 兜底语言
	fallbackLng: 'kkKZ',
	interpolation: {
		escapeValue: false,
	},
});

ReactDOM.render(
	<StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</StrictMode>,
	document.getElementById('root'),
);
