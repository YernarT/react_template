import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function RouteWithConfig({
  config,
  location: { pathname },
  jwt,
  userType,
}) {
  const targetConfig = config.find(
    (conf) => conf.path === pathname
  );

  // valid route
  if (targetConfig) {
    const verifiedAuth = targetConfig.auth.includes(
      Boolean(jwt)
    );
    const allowPermission =
      targetConfig.permission.includes(userType);

    if (verifiedAuth && allowPermission) {
      return (
        <Route
          path={pathname}
          component={targetConfig.page}
        />
      );
    }
    if (verifiedAuth && !allowPermission) {
      return <Redirect to="/404" />;
    }
    if (!verifiedAuth && allowPermission) {
      return <Redirect to="/login" />;
    }
    if (!verifiedAuth && !allowPermission) {
      return <Redirect to="/login" />;
    }
  } else {
    // invalid route
    return <Redirect to="/404" />;
  }
}
