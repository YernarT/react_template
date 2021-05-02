import React, { Component } from "react";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    // do something when open page
    console.log("hi");
  }

  componentDidMount() {
    window.addEventListener(
      "beforeunload",
      this.beforeunload
    );
  }
  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.beforeunload
    );
  }

  beforeunload(e) {
    e.preventDefault();

    // do something before unload
  }

  render() {
    return <div>Login Page</div>;
  }
}
