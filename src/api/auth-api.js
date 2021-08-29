import { jsonServerInstance } from "@api/ajax";

// Login
export const reqLog = data => jsonServerInstance.post("auth/login/", data);

// Register
export const reqReg = data =>
	jsonServerInstance.post("auth/registration/", data);
