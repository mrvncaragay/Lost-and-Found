import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import NavBar from './NavBar';
// import Login from './Login';
// import Signup from './Signup';
// import OrganizationSignUp from './OrganizationSignUp';
// import PropertySignUp from './PropertySignUp';

import { Dashboard } from 'layouts';

function LostAndFound() {
  return (
    <div>
      <Dashboard title="Dashboard" />

      {/* <Switch>
       
        NavBar />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/org-signup" component={OrganizationSignUp} />
        <Route exact path="/prop-signup" component={PropertySignUp} />
        <Route exact path="/" />
        <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
      </Switch> */}
    </div>
  );
}

export default LostAndFound;
