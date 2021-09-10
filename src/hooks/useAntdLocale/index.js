import en_US from "antd/lib/locale/en_US";
import zh_CN from "antd/lib/locale/zh_CN";

export default function useAntdLocale(locale) {
	let antdLocale;

	switch (locale) {
		case "en-US":
			antdLocale = en_US;
			break;
		case "zh-CN":
			antdLocale = zh_CN;
			break;
		default:
			antdLocale = en_US;
			break;
	}

	return antdLocale;
}
