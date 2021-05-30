import { combineReducers } from "redux";

import { default as user } from "@redux/reducers/user-reducer";
import { default as page } from "@redux/reducers/page-reducer";

export default combineReducers({ user, page });
