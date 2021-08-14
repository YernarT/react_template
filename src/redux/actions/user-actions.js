import {
	UPDATE_USER,
	DELETE_USER_INFO,
} from "@redux/action-types/user-action-types";
import { localStorage } from "@utils";

export const updateUserAction = userObj => ({
	type: UPDATE_USER,
	data: userObj,
});

export const deleteUserInfoAction = () => {
	localStorage.remove("user");

	return {
		type: DELETE_USER_INFO,
		data: undefined,
	};
};
