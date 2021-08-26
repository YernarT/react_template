import { ALL_AUTH, ALL_PERMISSION } from "@config/const-values";

import { PageNotFoundPage } from "@pages";

const commonRouting = [
	{
		path: "/404",
		page: PageNotFoundPage,
		auth: ALL_AUTH,
		permission: ALL_PERMISSION,
	},
];

export default commonRouting;
