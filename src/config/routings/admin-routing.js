import { AdminHomePage } from "@pages";

const adminRouting = [
  {
    path: "/admin",
    page: AdminHomePage,
    auth: [true],
    permission: ["admin"],
  },
];

export default adminRouting;
