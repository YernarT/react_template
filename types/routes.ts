import type { LazyExoticComponent } from 'react';

export interface RouteProps {
	path: string | string[];
	component: LazyExoticComponent<() => JSX.Element>;
	fallback: JSX.Element;
	auth: boolean;
	role: string[];
}
