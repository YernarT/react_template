import type { RouteProps } from './index';

import { lazy } from 'react';
import { sleep, role } from '@/utils';

import { CommonSkeleton } from '@/components/skeleton';

const commonRoutes: RouteProps[] = [
	{
		path: ['/', '/introduce'],
		component: lazy(async () => {
			await sleep(360);
			return import('@/pages/common/IntroducePage');
		}),
		fallback: <CommonSkeleton />,
		auth: false,
		role: role.all(),
		title: 'Introduce | React Template',
	},
	{
		path: '/404',
		component: lazy(() => import('@/pages/common/PageNotFoundPage')),
		fallback: <CommonSkeleton />,
		auth: false,
		role: role.all(),
		title: '404 | React Template',
	},
];

export default commonRoutes;
