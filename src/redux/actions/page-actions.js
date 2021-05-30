import {
  CHANGE_LOCALE,
  CHANEG_VIEW_MODE,
} from "@redux/action-types/page-action-types";

export const changeLocaleAction = (local) => ({
  type: CHANGE_LOCALE,
  data: local,
});

export const changeViewModeAction = (mode) => ({
  type: CHANEG_VIEW_MODE,
  data: mode,
});
