import { requireAuth } from "@utils";

import { UserHomePage } from "@pages";

const userRouting = [
	{
		path: "/",
		page: UserHomePage,
		...requireAuth("user"),
	},
];

export default userRouting;
