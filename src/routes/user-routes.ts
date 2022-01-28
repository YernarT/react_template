import type { RouteProps } from '#/routes';

import { lazy } from 'react';
import { Role } from '@/utils';

const userRoutes: Array<RouteProps> = [
	{
		path: '/',
		component: lazy(
			() => import(/* webpackChunkName: "HomePage" */ '@/pages/user/HomePage'),
		),
		auth: true,
		role: [Role.user, Role.admin],
	},
];

export default userRoutes;
