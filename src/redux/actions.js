import {
  // USER
  UPDATE_USER_INFO,
  DELETE_USER_INFO,
  // PAGE
  CHANGE_LOCALE,
} from "@redux/action-types";
import { localStorage } from "@utils";

// USER
export const updateUserAction = (userObj) => ({
  type: UPDATE_USER,
  data: userObj,
});

export const deleteUserInfoAction = () => {
  localStorage.remove("user");
  localStorage.remove("page");

  return {
    type: DELETE_USER_INFO,
    data: undefined,
  };
};


// PAGE
export const changeLocaleAction = (local) => ({
  type: CHANGE_LOCALE,
  data: local,
});
