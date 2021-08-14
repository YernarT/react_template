import {
	CHANGE_LOCALE,
	CHANEG_VIEW_MODE,
} from "@redux/action-types/page-action-types";

export const changeLocaleAction = locale => ({
	type: CHANGE_LOCALE,
	data: locale,
});

export const changeViewModeAction = mode => ({
	type: CHANEG_VIEW_MODE,
	data: mode,
});
