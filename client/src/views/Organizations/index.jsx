import React, { useEffect } from "react";
import { getOrganizations, setModel } from "actions";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Shared layouts
import { SoftwareAdminDashboard } from "./components";

// Material helpers
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CircularProgress } from "@material-ui/core";

const styles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: "100%"
  },
  progressWrapper: {
    paddingTop: "48px",
    paddingBottom: "24px",
    display: "flex",
    justifyContent: "center"
  }
}));

function Organizations({ getOrganizations, setModel, organization, user }) {
  const classes = styles();
  const { isLoading, organizations } = organization;

  /* eslint-disable */
  useEffect(() => {
    setModel("Organization")
    getOrganizations(50, 0);
  }, []);
    /* eslint-enable */

  const column = ["Name", "Property Code", "Address"];
  const options = {
    colLink: { name: "Name", link: "/organization/" }
  };

  return <SoftwareAdminDashboard />;
}

Organizations.propTypes = {
  getOrganizations: PropTypes.func.isRequired,
  setModel: PropTypes.func.isRequired,
  organization: PropTypes.object.isRequired,
  notify: PropTypes.object
};

const mapStateToProps = state => ({
  organization: state.organization,
  notify: state.notify,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { getOrganizations, setModel }
)(Organizations);
