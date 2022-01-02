/**
 * 翻译函数
 *
 * 欢迎大佬的 issue, pr
 * Github地址: https://github.com/YernarT/react_architecture
 */

import i18nLanguages from '@i18n/messages';

/**
 *
 * @param {String} string
 * 待翻译文本
 * @param {String} targetLocale
 * 目标语言
 * @returns {String} 翻译后的文本
 */
const translate = (string, targetLocale) => {
	// 默认语言为英语, 不翻译
	if (targetLocale === 'en-US') {
		return string;
	}

	return i18nLanguages[targetLocale][string] || string;
};

export default translate;
