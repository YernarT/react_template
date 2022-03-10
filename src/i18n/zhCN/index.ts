import { generateI18nPluralIntervalRule } from '@/utils';

export default {
	title: 'i18n国际化 案例',
	sample: '样板 <bold><italics>文字</italics></bold>',
	change_interval: generateI18nPluralIntervalRule({
		'0-inf': '你切换了 {{count}} 次语言',
	}),
};
