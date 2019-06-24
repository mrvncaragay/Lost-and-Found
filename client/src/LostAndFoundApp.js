import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./views/Homepage";
import Dashboard from "./views/Dashboard";
import User from "./views/User";
import SignIn from "./views/SignIn/User";
import AdminSignIn from "./views/SignIn/Admin";

function LostAndFound() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/users" component={User} />
      <Route exact path="/admin/sign-in" component={AdminSignIn} />
      <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
    </Switch>
  );
}

export default LostAndFound;
