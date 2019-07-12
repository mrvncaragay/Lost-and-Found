import React, { useState } from "react";

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

function Found({ toggle, setToggle }) {
  const classes = styles();

  const initialState = {
    dateFound: {
      date: "",
      time: ""
    },
    description: "",
    foundAt: "",
    owner: {
      name: "",
      phone: "",
      address: "",
      email: ""
    }
  };
  const [found, setFound] = useState(initialState);

  const handleChange = e => {
    const tempCopy = { ...found };
    const keyObject = e.target.getAttribute("data");

    keyObject
      ? (tempCopy[e.target.name][keyObject] = e.target.value)
      : (tempCopy[e.target.name] = e.target.value);

    setFound(tempCopy);
  };

  const handleCancel = () => {
    setToggle(false);
  };

  const handleSave = () => {
    setToggle(false);
  };

  return (
    <Fade in={toggle}>
      <Paper elevation={4} className={classes.root}>
        <Grid container className={classes.grid}>
          <Grid item xs={12} sm={12} className={classes.formHeader}>
            <Typography variant="h4">Found Item Form</Typography>

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
              label="Date found"
              name="dateFound"
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
              label="Time found"
              name="dateFound"
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
              label="Found location"
              onChange={e => handleChange(e)}
              name="foundAt"
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
  );
}

export default Found;
