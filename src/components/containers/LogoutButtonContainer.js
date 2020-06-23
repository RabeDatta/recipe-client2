import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../thunks";

const LogoutButtonContainer = (props) => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
  return <button onClick={props.logout}>Logout</button>;
};

const mapDispatch = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatch)(LogoutButtonContainer);
