import type { RouteProps } from '#/routes';

import { lazy } from 'react';
import { sleep } from '@/utils';

import { CommonLoading } from '@/loading';

const commonRoutes: RouteProps[] = [
	{
		path: ['/', '/introduce'],
		component: lazy(async () => {
			await sleep(360);
			return import('@/pages/common/IntroducePage');
		}),
		fallback: <CommonLoading />,
		auth: false,
		role: ['guest', 'user', 'admin'],
		title: 'Introduce | React Template',
	},
	{
		path: '/404',
		component: lazy(() => import('@/pages/common/PageNotFoundPage')),
		fallback: <CommonLoading />,
		auth: false,
		role: ['guest', 'user', 'admin'],
		title: '404 | React Template',
	},
];

export default commonRoutes;
