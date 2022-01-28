import type { RouteProps } from '#/routes';

import { lazy, Suspense } from 'react';
import { Role } from '@/utils';

const commonRoutes: Array<RouteProps> = [
	{
		path: '/404',
		component: (
			<Suspense fallback={<div>404 Loading...</div>}>
				{lazy(
					() =>
						import(
							/* webpackChunkName: "PageNotFoundPage" */ '@/pages/common/PageNotFoundPage'
						),
				)}
			</Suspense>
		),
		auth: false,
		role: Role.all(),
	},
];

export default commonRoutes;
