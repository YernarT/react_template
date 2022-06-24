// 类型
import type { pageStateProperties } from '@/store';

// React & 周边库
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

// 业务库
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import intervalPlural from 'i18next-intervalplural-postprocessor';
import { enUS, kkKZ, zhCN } from '@/i18n';

// 工具函数
import { getLatestState, localStorage, getHtmlLang } from '@/utils';
import { defaultPageState } from '@/store';

// 组件
import { SafeArea } from './components/common';
import App from './App';

// Initialize language, get it from LocalStorage
const [_, page] = getLatestState(
	localStorage.get('page', {}) as pageStateProperties,
	defaultPageState,
);

// 初始化 i18n模块
i18next
	.use(initReactI18next)
	.use(intervalPlural)
	.init({
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
		lng: page.locale,
		fallbackLng: 'enUS',
		compatibilityJSON: 'v3',
	});

ReactDOM.render(
	<StrictMode>
		<RecoilRoot>
			<SafeArea>
				<App />
			</SafeArea>
		</RecoilRoot>
	</StrictMode>,
	document.getElementById('root'),
	() => {
		document.documentElement.lang = getHtmlLang(page.locale);
	},
);
