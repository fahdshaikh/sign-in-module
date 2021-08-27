import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./history.js";

import OtherComponent from "./pages/otherPage";

import UsernameLogin from "./pages/signInSignUpModule/usernameLogin";
import ForgotPassword from "./pages/signInSignUpModule/forgotPassword";
import ResetPassword from "./pages/signInSignUpModule/resetPassword";
import Registration from "./pages/signInSignUpModule/registration";
import VerifyOtp from "./pages/signInSignUpModule/verifyOtp/index.jsx";
import ConfirmOtp from "./pages/signInSignUpModule/confirmOtp/index.jsx";

export default class Routes extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/plufo-india-login" />
          </Route>
          <Route
            path="/plufo-india-otherPage"
            component={() => <OtherComponent />}
          />
          <Route
            path="/plufo-india-login"
            component={() => <UsernameLogin />}
          />
          <Route
            path="/plufo-india-forgotPassword"
            component={() => <ForgotPassword />}
          />
          <Route
            path="/plufo-india-resetPassword"
            component={() => <ResetPassword />}
          />
          <Route
            path="/plufo-india-registration"
            component={() => <Registration />}
          />
          <Route
            path="/plufo-india-verifyOtp"
            component={() => <VerifyOtp />}
          />
          <Route
            path="/plufo-india-confirmOtp"
            component={() => <ConfirmOtp />}
          />
        </Switch>
      </Router>
    );
  }
}
