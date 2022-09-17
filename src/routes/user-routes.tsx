import type { RouteProps } from './index';

import { lazy } from 'react';
import { sleep, role } from '@/utils';

import { CommonSkeleton } from '@/components/skeleton';

const userRoutes: RouteProps[] = [
	{
		path: ['/user', '/user/profile'],
		component: lazy(async () => {
			await sleep(360);
			return import('@/pages/user/Profile');
		}),
		fallback: <CommonSkeleton />,
		auth: true,
		role: [role.USER],
		title: 'Profile | React Template',
	},
];

export default userRoutes;
