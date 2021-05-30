import AdminHomePage from "@pages/admin/HomePage";

const adminRouting = [
  {
    path: "/admin",
    page: AdminHomePage,
    auth: [true],
    permission: ["admin"],
  },
];

export default adminRouting;
