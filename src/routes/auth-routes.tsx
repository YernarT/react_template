import type { RouteProps } from './index';

import { lazy } from 'react';
import { sleep, role } from '@/utils';

import { CommonSkeleton } from '@/components/skeleton';

const authRoutes: RouteProps[] = [
	{
		path: ['/auth/sign-in'],
		component: lazy(async () => {
			await sleep(360);
			return import('@/pages/auth/SignInPage');
		}),
		fallback: <CommonSkeleton />,
		auth: true,
		role: role.all(),
		title: 'Sign in | React Template',
	},

	{
		path: ['/auth/sign-up'],
		component: lazy(async () => {
			await sleep(360);
			return import('@/pages/auth/SignUpPage');
		}),
		fallback: <CommonSkeleton />,
		auth: true,
		role: role.all(),
		title: 'Sign up | React Template',
	},
];

export default authRoutes;
