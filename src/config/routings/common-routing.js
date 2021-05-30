import PageNotFoundPage from "@pages/common/PageNotFoundPage";

const commonRouting = [
  {
    path: "/404",
    page: PageNotFoundPage,
    auth: [false],
    permission: ["guest"],
  },
];

export default commonRouting;
