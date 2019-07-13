import React, { useState, Fragment } from "react";

// Externals
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material helper
import {
  Fade,
  TextField,
  Paper,
  Grid,
  Typography,
  Tooltip,
  IconButton,
  Button,
  Divider
} from "@material-ui/core";

// Material icons
import { Close as CloseIcon } from "@material-ui/icons";

// Component styles
import styles from "./styles";

function Post({ title, toggle, setToggle, postFnc }) {
  const classes = styles();

  const initialState = {
    dateRegistered: {
      date: "",
      time: ""
    },
    description: "",
    locatedAt: "",
    owner: {
      name: "",
      phone: "",
      address: "",
      email: ""
    }
  };
  const [lost, setLost] = useState(initialState);

  const handleChange = e => {
    const tempCopy = { ...lost };
    const keyObject = e.target.getAttribute("data");

    keyObject
      ? (tempCopy[e.target.name][keyObject] = e.target.value)
      : (tempCopy[e.target.name] = e.target.value);

    setLost(tempCopy);
  };

  const handleCancel = () => {
    setToggle(false);
  };

  const handleSave = () => {
    postFnc(lost);
  };

  return (
    <Fragment>
      <Fade in={toggle}>
        <Paper elevation={4} className={classes.root}>
          <Grid container className={classes.grid}>
            <Grid item xs={12} sm={12} className={classes.formHeader}>
              <Typography variant="h4">{`${title}`} Item Form</Typography>

              <span className={classes.spacer} />

              <Tooltip title="Close" placement="right">
                <IconButton
                  variant="text"
                  className={classes.closeButton}
                  onClick={handleCancel}
                >
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </Grid>

            <Grid item xs={12} sm={12} className={classes.dateLostRow}>
              <span className={classes.spacer} />
              <TextField
                onChange={e => handleChange(e)}
                label={`Date ${title.toLowerCase()}`}
                name="dateRegistered"
                inputProps={{
                  data: "date"
                }}
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
              />

              <TextField
                className={classes.timeLost}
                onChange={e => handleChange(e)}
                inputProps={{
                  data: "time",
                  step: 300 // 5 min
                }}
                label={`Time ${title.toLowerCase()}`}
                name="dateRegistered"
                type="time"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12} className={classes.itemInfo}>
              <TextField
                className={classes.itemDesc}
                onChange={e => handleChange(e)}
                label="Description"
                name="description"
                type="text"
                margin="dense"
              />

              <TextField
                label="location"
                onChange={e => handleChange(e)}
                name="locatedAt"
                type="text"
                margin="dense"
              />
            </Grid>

            <Typography variant="h6">Owner info</Typography>
            <Divider variant="fullWidth" className={classes.divider} />

            <Grid item xs={12} sm={12} className={classes.ownerInfoRow1}>
              <TextField
                onChange={e => handleChange(e)}
                inputProps={{
                  data: "name"
                }}
                label="Name"
                name="owner"
                type="text"
                margin="dense"
              />

              <TextField
                onChange={e => handleChange(e)}
                inputProps={{
                  data: "email"
                }}
                label="Email"
                name="owner"
                type="text"
                margin="dense"
              />

              <TextField
                onChange={e => handleChange(e)}
                inputProps={{
                  data: "phone"
                }}
                label="Phone #"
                name="owner"
                type="text"
                margin="dense"
              />
            </Grid>

            <Grid item xs={12} sm={12} className={classes.ownerInfoRow2}>
              <TextField
                className={classes.address}
                onChange={e => handleChange(e)}
                inputProps={{
                  data: "address"
                }}
                label="Address"
                name="owner"
                type="text"
                margin="dense"
              />
            </Grid>

            <Grid item xs={12} sm={12} className={classes.formFooter}>
              <span className={classes.spacer} />

              <Tooltip title="Cancel" placement="bottom">
                <Button variant="outlined" size="small" onClick={handleCancel}>
                  Cancel
                </Button>
              </Tooltip>

              <Tooltip title="Save" placement="bottom">
                <Button
                  onClick={handleSave}
                  className={classes.saveButton}
                  variant="outlined"
                  size="small"
                  color="primary"
                >
                  Save
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Paper>
      </Fade>
    </Fragment>
  );
}

Post.propTypes = {
  postFnc: PropTypes.func.isRequired,
  notify: PropTypes.object
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(Post);
