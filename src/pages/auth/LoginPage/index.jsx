import React from "react";
import { connect } from "react-redux";

export const LoginPage = () => {
  return <div>Login Page</div>;
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
