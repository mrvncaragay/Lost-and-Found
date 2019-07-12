import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isSwAdmin, isOrgAdmin, isPropAdmin } from "util/validation";

// Shared component
import OrgAdminDashboard from "./OrgAdminDashboard";
import PropAdminDashboard from "./PropAdminDashboard";
import SwAdminDashboard from "./SwAdminDashboard";

function Dashboard({ user }) {
  return (
    <Fragment>
      {isSwAdmin(user.adminType) ? <SwAdminDashboard /> : null}
      {isOrgAdmin(user.adminType) ? <OrgAdminDashboard /> : null}
      {isPropAdmin(user.adminType) ? <PropAdminDashboard /> : null}
    </Fragment>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
