import React from "react";
import { Route, Switch } from "react-router-dom";
import { setCurrentUser, logOutUser } from "actions";
import setAuthJwtToken from "./util/setAuthJwtToken";

import Homepage from "./views/Homepage";
import Dashboard from "./views/Dashboard";
import User from "./views/User";
import Organizations from "./views/Organizations";
import Organization from "./views/Organization";
import Property from "./views/Property";
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
  try {
    const decoded = jwt.verify(
      localStorage["x-auth-token"],
      process.env.REACT_APP_JWT
    );

    // Set current user
    store.dispatch(setCurrentUser(decoded));
  } catch (error) {
    store.dispatch(logOutUser());
  }
}

function LostAndFound() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/admin/sign-in" component={AdminSignIn} />
      <Route exact path="/admin/sign-up" component={AdminSignUp} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/users" component={User} />
      <PrivateRoute exact path="/organization" component={Organizations} />
      <PrivateRoute exact path="/property" component={Property} />
      <PrivateRoute
        exact
        path="/organization/:name"
        component={routeProps => (
          <Organization name={routeProps.match.params.name} />
        )}
      />
      <PrivateRoute
        exact
        path="/:property/:name"
        component={routeProps => (
          <Property name={routeProps.match.params.name} />
        )}
      />
      <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
    </Switch>
  );
}

export default LostAndFound;
