import { requireAuth } from "@utils";

import { AdminHomePage } from "@pages";

const adminRouting = [
	{
		path: "/admin",
		page: AdminHomePage,
		...requireAuth("admin"),
	},
];

export default adminRouting;
