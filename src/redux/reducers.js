import { combineReducers } from "redux";
import { localStorage } from "@utils";
import {
  // USER
  UPDATE_USER,
  DELETE_USER_INFO,
  // PAGE
  CHANGE_LOCALE,
} from "@redux/action-types";

// USER
const userInitState = localStorage.get("user", {
  id: null,
  username: "",
  email: "",
  userType: "guest",
  jwt: "",
  refreshJWT: "",
});

function user(preState = userInitState, action) {
  const { data, type } = action;

  switch (type) {
    case UPDATE_USER:
      return Object.assign({}, preState, data);
    case DELETE_USER_INFO:
      return Object.assign({}, userInitState);
    default:
      return preState;
  }
}

// PAGE
const pageInitState = localStorage.get("locale", {
  locale: "ru-RU",
  viewMode: window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light",
});

function page(preState = pageInitState, action) {
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

export default combineReducers({ user, page });
