import type { FC } from 'react';

export interface RouteProps {
	path: string;
	component: FC;
	auth: boolean;
	role: Array<string>;
}
