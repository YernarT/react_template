/**
 * i18n 相关代码并不稳定
 * 后续版本会出现 breaking change
 * 欢迎各路大神参与开发
 *
 * 此处只是一个栗子 🌰
 * 根据项目需求自行修改
 * 有更好的意见可以提 issue, pr
 */
import i18nLocales from '@i18n/locales';

const i18nCHINESE = {
	[i18nLocales.CHINESE.code]: {
		'Sorry, the page you visited does not exist.': '抱歉，您访问的页面不存在。',
	},
};

export default i18nCHINESE;
