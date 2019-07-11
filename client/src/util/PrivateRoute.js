import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, admin, auth, ...rest }) => {
  let arrAdmin;
  if (admin) arrAdmin = admin.split(" ");

  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated === true ? (
          arrAdmin.includes(auth.user.adminType) ? (
            <Component {...props} />
          ) : (
            <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
          )
        ) : (
          <Redirect to="/admin/sign-in" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
