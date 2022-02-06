import type { RouteProps } from '#/routes';

import { memo, Suspense } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

interface RouteGuardProps {
	routes: Array<RouteProps>;
}

export default memo(function RouteGuard({ routes }: RouteGuardProps) {
	const { pathname } = useLocation();

	const targetConfig = routes.find(
		routeConfig => routeConfig.path === pathname,
	);

	if (targetConfig) {
		return (
			<Suspense fallback={targetConfig.fallback}>
				<Route path={targetConfig.path} component={targetConfig.component} />;
			</Suspense>
		);
	}

	return <Redirect to="/404" />;
});
