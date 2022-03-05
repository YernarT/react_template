/**
 * Return locale object based on a custom locale string
 *
 * Custom locale string stored in `pageAtom`, `localStorage`
 * locale object:
 *   1. used by material design
 *   2. used by date-fns lib
 *
 */
import type { allowedLocale } from '#/locale';

import { kzKZ, enUS, zhCN } from '@mui/material/locale';
import {
	kk as datekkKZ,
	enUS as dateEnUS,
	zhCN as dateZhCN,
} from 'date-fns/locale';

export default function getLocale(locale: allowedLocale) {
	switch (locale) {
		case 'kkKZ':
			return {
				uiLocale: kzKZ,
				dateLocale: datekkKZ,
			};
		case 'zhCN':
			return {
				uiLocale: zhCN,
				dateLocale: dateZhCN,
			};
		case 'enUS':
		default:
			return {
				uiLocale: enUS,
				dateLocale: dateEnUS,
			};
	}
}
