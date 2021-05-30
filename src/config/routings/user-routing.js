import HomePage from "@pages/user/HomePage";

const userRouting = [
  {
    path: "/",
    page: HomePage,
    auth: [false],
    permission: ["guest"],
  },
];

export default userRouting;
