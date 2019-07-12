import React from "react";

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
import { SaveOutlined as SaveIcon } from "@material-ui/icons";

// Component styles
import styles from "./styles";

function Lost() {
  const classes = styles();

  return (
    <Fade in={true}>
      <Paper elevation={4} className={classes.root}>
        <Grid container className={classes.grid}>
          <Grid item xs={12} sm={12} className={classes.formHeader}>
            <Typography variant="h4">Lost Item Form</Typography>

            <span className={classes.spacer} />

            <Tooltip title="Close" placement="right">
              <IconButton variant="text" className={classes.closeButton}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.itemInfo}>
            <TextField
              className={classes.textField}
              fullWidth
              label="Location"
              name="Location"
              type="text"
              variant="outlined"
              margin="dense"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Divider variant="fullWidth" className={classes.divider} />
          dsa
          {/* <TextField
            className={classes.textField}
            label="Description"
            name="Description"
            type="text"
            variant="outlined"
            margin="dense"
          />

          <TextField
            className={classes.textField}
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="dense"
          /> */}
          <Grid item xs={12} sm={12} className={classes.formFooter}>
            <span className={classes.spacer} />

            <Tooltip title="Cancel" placement="bottom">
              <Button variant="outlined" size="small">
                Cancel
              </Button>
            </Tooltip>

            <Tooltip title="Save" placement="bottom">
              <Button
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

export default Lost;
