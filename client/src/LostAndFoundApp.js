import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import NavBar from './NavBar';
// import Login from './Login';
// import Signup from './Signup';
// import OrganizationSignUp from './OrganizationSignUp';
// import PropertySignUp from './PropertySignUp';

import Dashboard from './views/Dashboard';
import User from './views/User';

function LostAndFound() {
  return (
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/users" component={User} />
      </Switch>

  
      

      // {/* <Switch>
       
      //   NavBar />
      //   <Route exact path="/login" component={Login} />
      //   <Route exact path="/signup" component={Signup} />
      //   <Route exact path="/org-signup" component={OrganizationSignUp} />
      //   <Route exact path="/prop-signup" component={PropertySignUp} />
      //   <Route exact path="/" />
      //   <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
      // </Switch> */}
  
  );
}

export default LostAndFound;
