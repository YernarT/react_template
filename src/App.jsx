import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import {
  ConfigProvider as AntdConfigProvider,
  message,
  notification,
} from "antd";

import { routingConfig } from "@config";
import {
  useAntdLocale,
  useBeforeunload,
  useConsole,
} from "@hooks";
import { RouteWithConfig } from "@components";

import "@assets/style/normalize.less";
import "@assets/style/antd.less";

// Antd message component global config
message.config({
  top: 8,
  duration: 3,
  maxCount: 4,
  rtl: false,
  prefixCls: "react-app-template-message",
  getContainer: () => document.body,
});

// Antd notification component global config
notification.config({
  placement: "bottomRight",
  top: 24,
  bottom: 24,
  duration: 4.5,
  rtl: false,
  prefixCls: "react-app-template-notification",
  getContainer: () => document.body,
});

const App = ({
  user,
  page,
  user: { jwt, userType },
  page: { locale },
}) => {
  // 刷新页面保存Redux内数据到LocalStorage
  useBeforeunload({ user, page });

  // 打印广告信息到Console面板
  useConsole();

  return (
    <AntdConfigProvider
      locale={useAntdLocale(locale)}
      prefixCls="react-app-template"
    >
      <BrowserRouter>
        <RouteWithConfig
          config={routingConfig}
          userType={userType}
          jwt={jwt}
        />
      </BrowserRouter>
    </AntdConfigProvider>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
