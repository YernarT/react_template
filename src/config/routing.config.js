import commonRouting from "@config/routings/common-routing";
import authRouting from "@config/routings/auth-routing";
import userRouting from "@config/routings/user-routing";
import adminRouting from "@config/routings/admin-routing";

export const DEBUG = false;

export const ALL_AUTH = [true, false];
export const ALL_PERMISSION = ["guest", "user", "admin"];

const routingConfig = [
	...authRouting,
	...userRouting,
	...adminRouting,
	...commonRouting,
];

if (DEBUG) {
	console.warn("Routing DEBUG!");

	routingConfig.forEach(conf => {
		conf.auth = [...ALL_AUTH];
		conf.permission = [...ALL_PERMISSION];
	});
}

export default routingConfig;
