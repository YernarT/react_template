/**
 * Return locale object based on a custom locale string
 *
 * Custom locale string stored in `pageAtom`, `localStorage`
 * locale object:
 *   1. antd ui
 *
 */
import type { allowedLocale } from '@/i18n';

import kkKZ from 'antd/lib/locale/kk_KZ';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';

export default function getAntdLocale(locale: allowedLocale) {
	switch (locale) {
		case 'kkKZ':
			return kkKZ;
		case 'zhCN':
			return zhCN;
		case 'enUS':
		default:
			return enUS;
	}
}
