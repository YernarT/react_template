import { DEBUG, ALL_AUTH, ALL_PERMISSION } from "@config";

import commonRouting from "@config/routings/common-routing";
import authRouting from "@config/routings/auth-routing";
import userRouting from "@config/routings/user-routing";
import adminRouting from "@config/routings/admin-routing";

const routingConfig = [
	...authRouting,
	...userRouting,
	...adminRouting,
	...commonRouting,
];

if (DEBUG) {
	console.warn("DEBUG!");

	routingConfig.forEach(conf => {
		conf.auth = [...ALL_AUTH];
		conf.permission = [...ALL_PERMISSION];
	});
}

export default routingConfig;
