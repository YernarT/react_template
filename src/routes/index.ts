import type { RouteProps } from '#/routes';

import userRoutes from './user-routes';
import commonRoutes from './common-routes';

const routes: RouteProps[] = [...userRoutes, ...commonRoutes];

export default routes;
