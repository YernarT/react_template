import {
	CHANGE_LOCALE,
	CHANEG_VIEW_MODE,
} from "@redux/action-types/page-action-types";
import { localStorage } from "@utils";

const initState = localStorage.get("page", {
	locale: "en-US",
	viewMode:
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light",
});

export default function page(preState = initState, action) {
	const { type, data } = action;

	switch (type) {
		case CHANEG_VIEW_MODE:
			return Object.assign({}, preState, {
				viewMode: data,
			});
		case CHANGE_LOCALE:
			return Object.assign({}, preState, { locale: data });
		default:
			return preState;
	}
}
