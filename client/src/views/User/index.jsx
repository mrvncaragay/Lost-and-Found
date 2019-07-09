import React, { useEffect, useState } from "react";
import { getUsers, setModel, getProperties } from "actions";
import { isEmpty } from "../../util/validation";
import { isSwAdmin, isPropAdmin, isOrgAdmin } from "util/validation";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Shared layouts
import { Dashboard as DashboardLayout } from "layouts";
import { DataTable, NotificationSnackbar } from "layouts";
import { SwAdmin } from "./components";

// Material helpers
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CircularProgress, Typography } from "@material-ui/core";

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
  },
  noData: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.common.muted
  }
}));

function User({
  setModel,
  notify,
  users,
  auth,
  getUsers,
  properties,
  getProperties
}) {
  const classes = styles();
  const [pcode, setPCode] = useState(null);

  const { isLoading, data } = users;

  const column = ["Name", "Email", "Property Code", "Admin Type", "Status"];
  const options = {
    selectInput: [
      {
        column: "Admin Type",
        optionValue: ["security", "propAdmin", "orgAdmin", "swAdmin"]
      },
      {
        column: "Status",
        optionValue: ["active", "inactive"]
      },
      {
        column: "Property Code",
        optionValue: pcode
      }
    ],
    colLink: { name: "Name", link: "/user/" },
    passwordField: true,
    addButton: false
  };

  /* eslint-disable */
  useEffect(() => {

    if(properties) {
      // re-check when in user page and refresh setPCode is empty
      setPCode(properties.data.map(property => property.propertyCode)) 
    }

  }, []);
  /* eslint-enable */

  /* 
    Organizations
  */
  return (
    <DashboardLayout title="Users">
      {notify ? (
        <NotificationSnackbar message={notify.message} type={notify.type} />
      ) : null}

      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            {isSwAdmin(auth.user.adminType) ? <SwAdmin /> : null}

            {/* {isLoading ? (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            ) : isEmpty(data) ? (
              <Typography className={classes.noData} variant="h5">
                There are no users
              </Typography>
            ) : isOrgAdmin(auth.user.adminType) ? (
              <DataTable
                title=""
                column={column}
                data={data}
                options={options}
              />
            ) : (
              <DataTable
                title=""
                column={column}
                data={data}
                options={options}
              />
            )} */}
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

User.propTypes = {
  getUsers: PropTypes.func.isRequired,
  getProperties: PropTypes.func.isRequired,
  setModel: PropTypes.func.isRequired,
  notify: PropTypes.object,
  properties: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  users: state.users,
  notify: state.notify,
  properties: state.property.properties
});

export default connect(
  mapStateToProps,
  { getUsers, setModel, getProperties }
)(User);
