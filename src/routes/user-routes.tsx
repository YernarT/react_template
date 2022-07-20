import type { RouteProps } from './index';

import { lazy } from 'react';
import { sleep, role } from '@/utils';

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
		role: [role.USER],
		title: 'Home | React Template',
	},
];

export default userRoutes;
