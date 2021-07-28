import i18nLanguages from "@i18n/messages";

import reduxStore from "@redux/store";

// 懒加载语言包
// 之后做正则替换 values 替换 {variable}
const translate = (id, values = {}) => {
  const state = reduxStore.getState();
  const { locale } = state.page;

  return i18nLanguages[locale][id];
};

export default translate;
