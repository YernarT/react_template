import {
  UPDATE_USER,
  //   CHANGE_SIDE_BAR_COLLAPSED,
  CHANGE_FULL_SCREEN_LOADING,
  CHANGE_LOCALE,
} from "@redux/action-types";

export const updateUserAction = (userObj) => ({
  type: UPDATE_USER,
  data: userObj,
});

// export const changeSideBarCollapsed = (collapsed) => ({
//   type: CHANGE_SIDE_BAR_COLLAPSED,
//   data: collapsed,
// });

export const changeFullScreenLoadingAction = (isLoading) => ({
  type: CHANGE_FULL_SCREEN_LOADING,
  data: isLoading,
});

export const changeLocaleAction = (local) => ({
  type: CHANGE_LOCALE,
  data: local,
});
