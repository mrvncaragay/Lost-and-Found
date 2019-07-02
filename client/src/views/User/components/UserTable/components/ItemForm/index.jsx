import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { postUser } from "actions";
import { userInputState } from "hooks";

// Material components
import {
  Grid,
  IconButton,
  Tooltip,
  Input,
  NativeSelect
} from "@material-ui/core";

// Material icon components
import { Clear as Cancel, Done as Save } from "@material-ui/icons";

// Component stlyes
import styles from "./styles";

function ItemForm({ postUser, toggleAddItem }) {
  const initValue = {
    name: "",
    email: "",
    password: "",
    adminType: ""
  };
  const [state, handleChange, reset] = userInputState(initValue);

  const classes = styles();

  const handleSave = () => {
    postUser({ ...state });
    reset();
    toggleAddItem(false);
  };

  const handleCancel = () => {
    toggleAddItem(false);
  };

  return (
    <Grid container className={classes.root}>
      <div xs={12} className={classes.item}>
        <Input
          value={state.name}
          placeholder="Name"
          onChange={e => handleChange("name", e)}
          inputProps={{
            "aria-label": "Name"
          }}
        />
      </div>

      <div xs={12} className={classes.item}>
        <Input
          value={state.email}
          placeholder="Email"
          onChange={e => handleChange("email", e)}
          inputProps={{
            "aria-label": "email"
          }}
        />
      </div>

      <div xs={12} className={classes.item}>
        <Input
          type="password"
          value={state.password}
          placeholder="Password"
          onChange={e => handleChange("password", e)}
          inputProps={{
            "aria-label": "Password"
          }}
        />
      </div>

      <div xs={12} className={classes.item}>
        <NativeSelect
          className={classes.selectItem}
          value={state.adminType}
          onChange={e => handleChange("adminType", e)}
        >
          <option value="" disabled>
            Admin Type
          </option>
          <option value="propAdmin">propAdmin</option>
          <option value="orgAdmin">orgAdmin</option>
          <option value="swAdmin">swAdmin</option>
        </NativeSelect>
      </div>
      <div xs={12} className={classes.actions}>
        <Tooltip title="Save">
          <IconButton onClick={() => handleSave(state._id)}>
            <Save />
          </IconButton>
        </Tooltip>

        <Tooltip title="Cancel">
          <IconButton onClick={handleCancel}>
            <Cancel />
          </IconButton>
        </Tooltip>
      </div>
    </Grid>
  );
}

ItemForm.propTypes = {
  postUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { postUser }
)(ItemForm);
