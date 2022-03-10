import type { RouteProps } from '#/routes';

import { lazy } from 'react';
import { sleep } from '@/utils';

import { CommonLoading } from '@/loading';

const userRoutes: RouteProps[] = [
	{
		path: ['/user', '/user/home'],
		component: lazy(async () => {
			await sleep(360);
			return import('@/pages/user/HomePage');
		}),
		fallback: <CommonLoading />,
		auth: true,
		role: ['user'],
		title: 'Home | React Template',
	},
];

export default userRoutes;
