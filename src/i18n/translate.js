/**
 * i18n 相关代码并不稳定
 * 后续版本会出现 breaking change
 * 欢迎各路大神参与开发
 *
 * 此处只是一个栗子 🌰
 * 根据项目需求自行修改
 * 有更好的意见可以提 issue, pr
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
