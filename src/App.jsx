import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";

import { ConfigProvider as AntdConfigProvider } from "antd";
import { I18nProvider } from "@i18n";

import { routingConfig } from "@config";
import { useAntdLocale, useBeforeunload } from "@hooks";
import RouteWithConfig from "@components/common/RouteWithConfig";

import "@assets/less/normalize.less";
import "@assets/less/antd.less";
import "./App.less";

const App = ({
  user,
  page,
  user: { jwt, userType },
  page: { locale },
}) => {
  // 刷新页面保存Redux内数据到LocalStorage
  useBeforeunload({ user, page });

  return (
    <I18nProvider locale={locale}>
      <AntdConfigProvider locale={useAntdLocale(locale)}>
        <BrowserRouter>
          <Switch>
            <RouteWithConfig
              config={routingConfig}
              userType={userType}
              jwt={jwt}
            />
          </Switch>
        </BrowserRouter>
      </AntdConfigProvider>
    </I18nProvider>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
