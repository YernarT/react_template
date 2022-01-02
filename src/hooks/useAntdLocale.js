/**
 * 根据 locale字符串 返回对应的 antd库 中的 local对象
 * 将local字符串同时存在 recoil, localStorage中, 默认英语
 * 存在 localStorage 保证下次打开页面还是之前的语言
 * 存在 recoil 可实时刷新页面语言
 *
 * 欢迎大佬的 issue, pr
 * Github地址: https://github.com/YernarT/react_architecture
 */

import { useCreation } from 'ahooks';

import en_US from 'antd/lib/locale/en_US';
import zh_CN from 'antd/lib/locale/zh_CN';

export default function useAntdLocale(locale) {
	const antdLocale = useCreation(() => {
		switch (locale) {
			case 'en-US':
				return en_US;

			case 'zh-CN':
				return zh_CN;

			default:
				return en_US;
		}
	}, [locale]);

	return antdLocale;
}
