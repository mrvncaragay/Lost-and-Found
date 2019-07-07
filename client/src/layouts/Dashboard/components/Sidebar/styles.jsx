import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0)
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "63px",
    flexShrink: 0
  },
  logoImage: {
    cursor: "pointer"
  },
  logoDivider: {
    marginTop: 0,
    marginBottom: theme.spacing(2)
  },
  image: {
    height: "63px"
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
    marginBottom: theme.spacing(2)
  },
  avatar: {
    width: "100px",
    height: "100px"
  },
  nameText: {
    marginTop: theme.spacing(1)
  },
  bioText: {},
  profileDivider: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  mainList: {
    marginLeft: theme.spacing(1)
  },
  listSubheader: {
    color: theme.palette.text.secondary
  },
  listItem: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      borderRadius: "4px",
      "& $listItemIcon": {
        color: theme.palette.primary.main,
        marginLeft: "-4px"
      }
    },
    "& + &": {
      marginTop: theme.spacing(1)
    }
  },
  activeListItem: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    borderRadius: "4px",
    backgroundColor: theme.palette.primary.light,
    "& $listItemText": {
      color: theme.palette.text.primary
    },
    "& $listItemIcon": {
      color: theme.palette.primary.main,
      marginLeft: "-4px"
    }
  },
  listItemIcon: {
    marginRight: 0
  },
  listItemText: {
    fontWeight: 500,
    color: theme.palette.text.secondary
  },
  listDivider: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  }
}));
