import type { LazyExoticComponent } from 'react';

export type allowdRole = 'guest' | 'user' | 'admin';

export interface RouteProps {
	path: string | string[];
	component: LazyExoticComponent<() => JSX.Element>;
	fallback: JSX.Element;
	auth: boolean;
	role: allowdRole[];
	title?: string;
}
