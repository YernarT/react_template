// AUTH
import LoginPage from "@pages/common/LoginPage";

// USER
import UserHomePage from "@pages/user/HomePage";

// ADMIN
import AdminHomePage from "@pages/admin/HomePage";

// 404
import PageNotFoundPage from "@pages/common/PageNotFoundPage";

const DEBUG = true;

const routingConfig = [
  /* AUTH */
  {
    path: "/login",
    page: LoginPage,
    auth: [false],
    permission: ["guest"],
  },
  /* USER */
  {
    path: "/",
    page: UserHomePage,
    auth: [true],
    permission: ["user"],
  },
  /* ADMIN */
  {
    path: "/admin",
    page: AdminHomePage,
    auth: [true],
    permission: ["admin"],
  },
  /* 404 */
  {
    path: "/404",
    page: PageNotFoundPage,
    auth: [false, true],
    permission: ["guest", "user", "admin"],
  },
];

if (DEBUG) {
  routingConfig.forEach((conf) => {
    conf.auth = [...conf.auth, true, false];
    conf.permission = [
      ...conf.permission,
      "guest",
      "user",
      "admin",
    ];
  });
}

export default routingConfig;
