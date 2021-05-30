import { localStorage } from "@utils";
import {
  UPDATE_USER,
  DELETE_USER_INFO,
} from "@redux/action-types/user-action-types";

const initState = localStorage.get("user", {
  id: null,
  username: "",
  email: "",
  userType: "guest",
  jwt: "",
  refreshJWT: "",
});

export default function user(preState = initState, action) {
  const { data, type } = action;

  switch (type) {
    case UPDATE_USER:
      return Object.assign({}, preState, data);
    case DELETE_USER_INFO:
      return Object.assign(
        {},
        {
          id: null,
          username: "",
          email: "",
          userType: "guest",
          jwt: "",
          refreshJWT: "",
        }
      );
    default:
      return preState;
  }
}
