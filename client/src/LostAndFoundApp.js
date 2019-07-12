import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  setCurrentUser,
  logOutUser,
  setCurrentOrganization,
  setCurrentProperty,
  getOrganizationData
} from "actions";
import setAuthJwtToken from "./util/setAuthJwtToken";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Homepage from "./views/Homepage";
import Dashboard from "./views/Dashboard";
import User from "./views/User";
import Organization from "./views/Organization";
import Property from "./views/Property";
import SignIn from "./views/SignIn/User";
import AdminSignIn from "./views/SignIn/Admin";
import AdminSignUp from "./views/SignUp/Admin";
import PrivateRoute from "./util/PrivateRoute";

// External
import jwt from "jsonwebtoken";

function LostAndFound({
  setCurrentUser,
  setCurrentOrganization,
  setCurrentProperty,
  getOrganizationData,
  logOutUser
}) {
  // If page refresh
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
      setCurrentUser(decoded);

      // Set Organization
      setCurrentOrganization(decoded.property.organization);

      // retrieve organization data
      getOrganizationData();
      // Check if localstorage has property
      if (localStorage["property"]) {
        const prop = JSON.parse(localStorage.getItem("property"));

        // Set current property
        setCurrentProperty(prop);
      }
    } catch (error) {
      logOutUser();
    }
  }

  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/admin/sign-in" component={AdminSignIn} />
      <Route exact path="/admin/sign-up" component={AdminSignUp} />
      <PrivateRoute
        exact
        admin="security propAdmin orgAdmin swAdmin"
        path="/dashboard"
        component={Dashboard}
      />
      <PrivateRoute
        exact
        admin="propAdmin orgAdmin swAdmin"
        path="/users"
        component={User}
      />

      {/* not included? */}
      <PrivateRoute exact path="/property" component={Property} />

      <PrivateRoute
        exact
        admin="swAdmin"
        path="/organization/:name"
        component={routeProps => (
          <Organization name={routeProps.match.params.name} />
        )}
      />
      <PrivateRoute
        exact
        admin="orgAdmin"
        path="/:property/:name"
        component={routeProps => (
          <Property name={routeProps.match.params.name} />
        )}
      />
      <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
    </Switch>
  );
}

LostAndFound.propTypes = {};

const myStateToProps = state => ({});

export default connect(
  myStateToProps,
  {
    setCurrentUser,
    setCurrentOrganization,
    setCurrentProperty,
    logOutUser,
    getOrganizationData
  }
)(LostAndFound);
