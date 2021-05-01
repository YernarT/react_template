import { combineReducers } from "redux";
import { localStorage } from "@utils";

import {
  UPDATE_USER,
  // CHANGE_SIDE_BAR_COLLAPSED,
  CHANGE_FULL_SCREEN_LOADING,
  CHANGE_LOCALE,
} from "@redux/action-types";

const userInitState = localStorage.get("user", {
  id: null,
  username: "",
  email: "",
  userType: "guest",
  jwt: "",
});

function user(preState = userInitState, action) {
  const { data, type } = action;

  switch (type) {
    case UPDATE_USER:
      return Object.assign({}, preState, data);
    default:
      return preState;
  }
}

const pageInitState = {
  collapsed: false,
  isLoading: false,
  locale: localStorage.get("locale", "ru-RU"),
};
function page(preState = pageInitState, action) {
  const { type, data } = action;

  switch (type) {
    // case CHANGE_SIDE_BAR_COLLAPSED:
    // return Object.assign({}, preState, { collapsed: data });
    case CHANGE_FULL_SCREEN_LOADING:
      return Object.assign({}, preState, {
        isLoading: data,
      });
    case CHANGE_LOCALE:
      return Object.assign({}, preState, { locale: data });
    default:
      return preState;
  }
}

export default combineReducers({ user, page });
