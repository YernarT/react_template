import { generateI18nPluralIntervalRule } from '@/utils';

export default {
	title: 'i18n internationalization example',
	sample: 'Sample <bold><italics>text</italics></bold>',
	change_interval: generateI18nPluralIntervalRule({
		'0': 'You have changed the language {{count}} time',
		'1': 'You have changed the language {{count}} time',
		'2-inf': 'You have changed the language {{count}} times',
	}),
};
