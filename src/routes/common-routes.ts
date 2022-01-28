import type { RouteProps } from '#/routes';

import { lazy } from 'react';
import { Role } from '@/utils';

const commonRoutes: Array<RouteProps> = [
	{
		path: '/404',
		component: lazy(
			() =>
				import(
					/* webpackChunkName: "PageNotFoundPage" */ '@/pages/common/PageNotFoundPage'
				),
		),
		auth: false,
		role: Role.all(),
	},
];

export default commonRoutes;
