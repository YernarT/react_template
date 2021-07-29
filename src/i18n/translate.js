import i18nLanguages from "@i18n/messages";

import reduxStore from "@redux/store";

/**
 * Todo:
 * 1) Lazy loading language pack
 * 2) Regular replacement, values replace {variable}
 */

const translate = (id, values = {}) => {
  const state = reduxStore.getState();
  const { locale } = state.page;

  return i18nLanguages[locale][id];
};

export default translate;
