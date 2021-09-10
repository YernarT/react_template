import i18nLanguages from "@i18n/messages";

import { useRecoilValue } from "recoil";
import { pageAtom } from "@recoil";

const translate = (string, config = null) => {
	const { locale } = useRecoilValue(pageAtom);

	if (config) {
		/**
		 * 约定翻译时, 不翻译将要替换的string
		 */

		// 默认语言为英语, 不翻译
		if (locale !== "en-US") {
			string = i18nLanguages[locale][string];
		} 

		config.innerWrap.forEach(el => {
			let attr = "";
			el.attr.forEach(el => {
				attr += `${el.name}="${el.value}"`;
			});

			string = string.replaceAll(
				el.string,
				`<${el.wrap} ${attr}}>${el.string}</${el.wrap}>`,
			);
		});

		let attr = "";
		config.attr.forEach(el => {
			attr += `${el.name}="${el.value}"`;
		});

		string = `<${config.wrap} ${attr}>${string}</${config.wrap}>`;

		return string;
	} else {
		// 默认语言为英语, 不翻译
		if (locale === "en-US") {
			return string;
		}

		return i18nLanguages[locale][string];
	}
};

export default translate;
