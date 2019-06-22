import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Homepage from './views/Homepage';
import Dashboard from './views/Dashboard';
import User from './views/User';

function LostAndFound() {
  return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/users" component={User} />
        <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
      </Switch>  
  );
}

export default LostAndFound;
