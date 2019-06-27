import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { setCurrentUser } from "./actions/authActions";
import setAuthJwtToken from "./util/setAuthJwtToken";

import Homepage from "./views/Homepage";
import Dashboard from "./views/Dashboard";
import User from "./views/User";
import SignIn from "./views/SignIn/User";
import AdminSignIn from "./views/SignIn/Admin";
import AdminSignUp from "./views/SignUp/Admin";
import PrivateRoute from "./util/PrivateRoute";

// External
import jwt from "jsonwebtoken";
import store from "./store";

if (localStorage["x-auth-token"]) {
  // Set auth token to header
  setAuthJwtToken(localStorage["x-auth-token"]);
  // Decode token
  const decoded = jwt.verify(
    localStorage["x-auth-token"],
    process.env.REACT_APP_JWT
  );
  // Set current user
  store.dispatch(setCurrentUser(decoded));
}

function LostAndFound() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/sign-in" component={SignIn} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route exact path="/users" component={User} />
      <Route exact path="/admin/sign-in" component={AdminSignIn} />
      <Route exact path="/admin/sign-up" component={AdminSignUp} />
      <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
    </Switch>
  );
}

export default LostAndFound;
