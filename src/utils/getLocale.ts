/**
 * 根据自定义的 locale字符串返回 (pageAtom储存的 locale属性)
 * meterial design 用到的 locale对象
 * date-fns 用到的 locale对象
 */

import { kzKZ, enUS, zhCN } from '@mui/material/locale';
import { kk, enUS as dateEnUS, zhCN as dateZhCN } from 'date-fns/locale';

export default function getLocale(locale: 'kkKZ' | 'enUS' | 'zhCN') {
	switch (locale) {
		case 'kkKZ':
			return {
				uiLocale: kzKZ,
				dateLocale: kk,
			};
		case 'enUS':
			return {
				uiLocale: enUS,
				dateLocale: dateEnUS,
			};
		case 'zhCN':
			return {
				uiLocale: zhCN,
				dateLocale: dateZhCN,
			};
		default:
			return {
				uiLocale: kzKZ,
				dateLocale: kk,
			};
	}
}
