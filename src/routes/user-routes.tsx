import type { RouteProps } from '#/routes';

import { lazy, Suspense } from 'react';
import { Role } from '@/utils';

const userRoutes: Array<RouteProps> = [
	{
		path: '/',
		component: (
			<Suspense fallback={<div>Home Loading...</div>}>
				{lazy(
					() =>
						import(/* webpackChunkName: "HomePage" */ '@/pages/user/HomePage'),
				)}
			</Suspense>
		),
		auth: true,
		role: [Role.user, Role.admin],
	},
];

export default userRoutes;
