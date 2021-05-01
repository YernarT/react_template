import ajax from "@api/ajax";

export const reqLoginWithPhone = (data) => ajax("auth/login/", data, "POST");
export const reqLoginWithEmail = (data) => ajax("auth/login/", data, "POST");

export const reqRegister = (data) => ajax("auth/registration/", data, "POST");

// Calendar
export const reqStudentCalendar = (params, jwt) =>
  ajax("lesson/calendar/", params, "GET", jwt);

// Student Task Content
export const reqStudentTaskContent = (id, jwt) =>
  ajax(`lesson/task/${id}/`, {}, "GET", jwt);
