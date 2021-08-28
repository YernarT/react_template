import i18nLanguages from "@i18n/messages";

import { useRecoilValue } from "recoil";
import { pageAtom } from "@recoil";

/**
 * Todo:
 * 1) Lazy loading language pack
 * 2) Regular replacement, values replace {variable}
 */

const translate = (id, values = {}) => {
	const { locale } = useRecoilValue(pageAtom);

	return i18nLanguages[locale][id];
};

export default translate;
