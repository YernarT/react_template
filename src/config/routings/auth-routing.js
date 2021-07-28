import { LoginPage, RegisterPage } from "@pages";

const authRouting = [
  {
    path: "/login",
    page: LoginPage,
    auth: [false],
    permission: ["guest"],
  },
  {
    path: "/register",
    page: RegisterPage,
    auth: [false],
    permission: ["guest"],
  },
];

export default authRouting;
