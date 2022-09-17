import { generateI18nPluralIntervalRule } from '@/utils';

export default {
	title: 'i18n жаһандану мысалы',
	sample: 'Үлгі <bold><italics>текст</italics></bold>',
	change_interval: generateI18nPluralIntervalRule({
		'0-inf': 'Тілді {{count}} рет өзгерттің',
	}),

	signIn: 'Кіру'
};
