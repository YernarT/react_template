import { UserHomePage } from "@pages";

const userRouting = [
  {
    path: "/",
    page: UserHomePage,
    auth: [true],
    permission: ["user"],
  },
];

export default userRouting;
