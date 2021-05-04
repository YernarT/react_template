import React, { Component } from "react";

import "./index.less";

export default class FullScreenLoading extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      <div
        className="full-screen-loading"
        style={{
          opacity: isLoading ? "0.6" : "0",
          pointerEvents: isLoading ? "auto" : "none",
        }}
      >
        <div className="spinner1"></div>
        <div className="spinner2"></div>
      </div>
    );
  }
}
