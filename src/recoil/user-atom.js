import { atom } from "recoil";
import { localStorage } from "@utils";

export const userAtom = atom({
	key: "userAtom",
	default: localStorage.get("user", {
		id: null,
		username: "",
		email: "",
		userType: "guest",
		jwt: "",
		refreshJWT: "",
	}),
});
