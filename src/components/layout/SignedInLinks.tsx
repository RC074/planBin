import React from "react";

// third party
import { NavLink } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      listStyleType: "none",
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
    button: {
      marginRight: theme.spacing(2),
      float: "left",
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

const SignedInLinks = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <ul className={classes.root}>
      <li className={classes.button}>
        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
          {matches ? (
            <AddCircleIcon color="secondary" />
          ) : (
            <Button
              startIcon={<AddCircleIcon />}
              variant="contained"
              color="secondary"
            >
              New
            </Button>
          )}
        </NavLink>
      </li>
      <li className={classes.button}>
        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
          {matches ? (
            <ExitToAppIcon color="secondary" />
          ) : (
            <Button
              startIcon={<ExitToAppIcon />}
              variant="contained"
              color="secondary"
            >
              Log Out
            </Button>
          )}
        </NavLink>
      </li>
      <li className={classes.button}>
        <Avatar className={classes.avatar}>RL</Avatar>
      </li>
    </ul>
  );
};

export default SignedInLinks;
