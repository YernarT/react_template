import React from "react";
import { connect } from "react-redux";

export const HomePage = () => {
  return <div>Home Page</div>;
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
