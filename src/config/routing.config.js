import LoginPage from "@pages/public/LoginPage";
import PageNotFoundPage from "@pages/public/PageNotFoundPage";

// import RegisterPage from "@pages/user/RegisterPage";
// import UserHomePage from "@pages/user/HomePage";

const routingConfig = [
  {
    path: "/login",
    page: LoginPage,
    auth: [false],
    permission: ["guest"],
  },
  {
    path: "/register",
    // page: RegisterPage,
    auth: [false],
    permission: ["guest"],
  },
  /* - - - */
  {
    path: "/",
    // page: UserHomePage,
    auth: [true],
    permission: ["user"],
  },
  /* --- */
  {
    path: "/404",
    page: PageNotFoundPage,
    auth: [false, true],
    permission: ["guest", "user", "admin"],
  },
];

export default routingConfig;
