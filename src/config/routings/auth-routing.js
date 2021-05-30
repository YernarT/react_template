import LoginPage from "@pages/common/LoginPage";

const authRouting = [
  {
    path: "/login",
    page: LoginPage,
    auth: [false],
    permission: ["guest"],
  },
];

export default authRouting;
