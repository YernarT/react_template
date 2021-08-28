import { atom } from "recoil";
import { localStorage } from "@utils";

export const pageAtom = atom({
	key: "pageAtom",
	default: localStorage.get("page", {
		locale: "en-US",
		viewMode:
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light",
	}),
});
