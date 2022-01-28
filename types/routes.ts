import type { ReactElement } from 'react';

export interface RouteProps {
	path: string;
	component: ReactElement;
	auth: boolean;
	role: Array<string>;
}
