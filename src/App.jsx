import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Switch } from "react-router-dom";

import { ConfigProvider as AntdConfigProvider } from "antd";
import en_US from "antd/lib/locale/en_US";
import zh_CN from "antd/lib/locale/zh_CN";
import ru_RU from "antd/lib/locale/ru_RU";
import kk_KZ from "antd/lib/locale/kk_KZ";
import { I18nProvider } from "@i18n";

import { routingConfig } from "@config";
import RouteWithConfig from "@components/common/RouteWithConfig";

import { debounce, localStorage } from "@utils";

import "@assets/less/normalize.less";
import "@assets/less/antd.less";
import "./App.less";

class App extends Component {
  // constructor(props) {
  // super(props);
  // }

  handelResize = debounce(() => {
    let { clientWidth } = window.document.documentElement;
    let htmlFontSize = (14 * clientWidth) / 300;
    if (htmlFontSize > 16) htmlFontSize = 16;
    if (htmlFontSize < 12) htmlFontSize = 12;
    window.document.documentElement.style.fontSize =
      htmlFontSize.toFixed(2) + "px";
  }, 500);

  handelBeforeunload = () => {
    localStorage.set("user", this.props.user);
    localStorage.set("page", this.props.page);
  };

  componentDidMount = () => {
    window.addEventListener("load", this.handelResize);
    window.addEventListener("resize", this.handelResize);
    window.addEventListener(
      "beforeunload",
      this.handelBeforeunload
    );
  };

  componentWillUnmount = () => {
    window.removeEventListener("load", this.handelResize);
    window.removeEventListener("resize", this.handelResize);
    window.addEventListener(
      "beforeunload",
      this.handelBeforeunload
    );
  };

  render() {
    const { jwt, userType } = this.props.user;
    const { locale } = this.props.page;
    let antdLocale;
    switch (locale) {
      case "en-US":
        antdLocale = en_US;
        break;
      case "zh-CN":
        antdLocale = zh_CN;
        break;
      case "ru-RU":
        antdLocale = ru_RU;
        break;
      case "kk-KZ":
        antdLocale = kk_KZ;
        break;
      default:
        antdLocale = ru_RU;
        break;
    }

    return (
      <I18nProvider locale={locale}>
        <AntdConfigProvider locale={antdLocale}>
          <HashRouter>
            <Switch>
              <RouteWithConfig
                config={routingConfig}
                userType={userType}
                jwt={jwt}
              />
            </Switch>
          </HashRouter>
        </AntdConfigProvider>
      </I18nProvider>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
