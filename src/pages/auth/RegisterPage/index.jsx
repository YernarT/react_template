import React from "react";
import { connect } from "react-redux";

export const RegisterPage = () => {
  return <div>Home Page</div>;
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
