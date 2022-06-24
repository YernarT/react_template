import type { allowedLocale } from '@/i18n';

export default function getHtmlLang(locale: allowedLocale) {
	switch (locale) {
		case 'kkKZ':
			return 'kk';
		case 'zhCN':
			return 'zh-Hans';
		case 'enUS':
		default:
			return 'en';
	}
}
