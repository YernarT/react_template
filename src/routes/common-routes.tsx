import type { RouteProps } from '#/routes';

import { lazy } from 'react';
import { Role } from '@/utils';

const commonRoutes: RouteProps[] = [
	{
		path: '/404',
		component: lazy(
			() =>
				import(
					/* webpackChunkName: "PageNotFoundPage" */ '@/pages/common/PageNotFoundPage'
				),
		),
		fallback: <div>404 Loading...</div>,
		auth: false,
		role: Role.all(),
	},
];

export default commonRoutes;
