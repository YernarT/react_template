import type { LazyExoticComponent, NamedExoticComponent } from 'react';
import type { allowedRole } from '@/utils';

export interface RouteProps {
	path: string | string[];
	component:
		| LazyExoticComponent<() => JSX.Element> // 普通组件
		| LazyExoticComponent<NamedExoticComponent<object>>; // memo 优化组件

	fallback: JSX.Element;
	auth: boolean;
	role: allowedRole[];
	title?: string;
}

import userRoutes from './user-routes';
import commonRoutes from './common-routes';

const routes: RouteProps[] = [...userRoutes, ...commonRoutes];

export default routes;
