/**
 * 根据 locale字符串 返回对应的 antd库 中的 local对象
 * 此项目假设有多语言需求, local字符串存在 recoil, localStorage中, 默认英语
 *
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

import { useMemo } from 'react';

import en_US from 'antd/lib/locale/en_US';
import zh_CN from 'antd/lib/locale/zh_CN';

export default function useAntdLocale(locale) {
	const antdLocale = useMemo(() => {
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
