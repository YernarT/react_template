import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";

import { ConfigProvider as AntdConfigProvider } from "antd";
import en_US from "antd/lib/locale/en_US";
import zh_CN from "antd/lib/locale/zh_CN";
import ru_RU from "antd/lib/locale/ru_RU";
import kk_KZ from "antd/lib/locale/kk_KZ";

import { I18nProvider } from "@i18n";
import { routingConfig } from "@config";
import { debounce } from "@utils";
import RouteWithConfig from "@components/public/RouteWithConfig";
import FullScreenLoading from "@components/public/FullScreenLoading";

class App extends Component {
  // constructor(props) {
  // super(props);
  // }

  handelResize = debounce(() => {
    let { clientWidth } = window.document.documentElement;
    let htmlFontSize = (14 * clientWidth) / 320;
    if (htmlFontSize > 18) htmlFontSize = 18;
    if (htmlFontSize < 14) htmlFontSize = 14;
    window.document.documentElement.style.fontSize =
      htmlFontSize.toFixed(2) + "px";

    // console.log(
    //   window.document.documentElement.style.fontSize
    // );
  }, 500);

  componentDidMount = () => {
    window.addEventListener("load", this.handelResize);
    window.addEventListener("resize", this.handelResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener("load", this.handelResize);
    window.removeEventListener("resize", this.handelResize);
  };

  render() {
    const { jwt, userType } = this.props.user;
    const { locale, isLoading } = this.props.page;
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
          <BrowserRouter>
            <Switch>
              <RouteWithConfig
                config={routingConfig}
                userType={userType}
                jwt={jwt}
              />
            </Switch>
          </BrowserRouter>
          <FullScreenLoading isLoading={isLoading} />
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
