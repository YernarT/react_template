import type { RouteProps } from '#/routes';

import { memo, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

interface RouteGuardProps {
	routes: Array<RouteProps>;
}

export default memo(function RouteGuard({ routes }: RouteGuardProps) {
	const { pathname } = location;

	const targetConfig = routes.find(
		routeConfig => routeConfig.path === pathname,
	);

	if (targetConfig) {
		return (
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={targetConfig.path} element={targetConfig.component} />
				</Routes>
			</Suspense>
		);
	}

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="*" element={<Navigate replace to="/404" />} />
			</Routes>
		</Suspense>
	);
});
