import { jsonServerInstance } from "@api/ajax";

// All user
export const reqUserList = params => jsonServerInstance.get("/users", params);
