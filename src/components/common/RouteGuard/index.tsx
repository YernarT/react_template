import type { RouteProps } from '#/routes';

import { memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

interface RouteGuardProps {
	routes: Array<RouteProps>;
}

export default memo(function RouteGuard({ routes }: RouteGuardProps) {
	const { pathname } = location;

	const targetConfig = routes.find(
		routeConfig => routeConfig.path === pathname,
	);

	console.log(targetConfig);

	<Routes>
		{targetConfig ? (
			<Route path={targetConfig.path} element={targetConfig.component} />
		) : (
			<Route path="*" element={<Navigate replace to="/404" />} />
		)}
	</Routes>;
});
