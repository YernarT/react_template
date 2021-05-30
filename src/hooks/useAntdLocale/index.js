import en_US from "antd/lib/locale/en_US";
import zh_CN from "antd/lib/locale/zh_CN";
import ru_RU from "antd/lib/locale/ru_RU";
import kk_KZ from "antd/lib/locale/kk_KZ";

export default function useAntdLocale(locale) {
  let antdLocale;

  switch (locale) {
    case "en-US":
      antdLocale = en_US;
      break;
    case "zh-CN":
      antdLocale = zh_CN;
      break;
    case "ru-RU":
      antdLocale = ru_RU;
      break;
    case "kk-KZ":
      antdLocale = kk_KZ;
      break;
    default:
      antdLocale = kk_KZ;
      break;
  }

  return antdLocale;
}
