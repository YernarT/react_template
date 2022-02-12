import type { RouteProps } from '#/routes';

import { memo, Suspense } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

interface RouteGuardProps {
	routes: RouteProps[];
}

export default memo(function RouteGuard({ routes }: RouteGuardProps) {
	const { pathname } = useLocation();

	const targetConfig = routes.find(
		routeConfig => routeConfig.path === pathname,
	);

	if (targetConfig) {
		if (targetConfig.auth && targetConfig.role) {
			// some logic
		}

		return (
			<Suspense fallback={targetConfig.fallback}>
				<Route path={targetConfig.path} component={targetConfig.component} />;
			</Suspense>
		);
	}

	return <Redirect to="/404" />;
});
