import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Shared component
import OrgAdminDashboard from "../OrgAdminDashboard";
import PropAdminDashboard from "../PropAdminDashboard";

import { isPropAdmin } from "util/validation";

function Dashboard({ user }) {
  return isPropAdmin(user.adminType) ? (
    <PropAdminDashboard />
  ) : (
    <OrgAdminDashboard />
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
