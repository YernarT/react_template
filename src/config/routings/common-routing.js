import { PageNotFoundPage } from "@pages";
import { ALL_AUTH, ALL_PERMISSION } from "@config/routing.config";

const commonRouting = [
	{
		path: "/404",
		page: PageNotFoundPage,
		auth: [...ALL_AUTH],
		permission: [...ALL_PERMISSION],
	},
];

export default commonRouting;
