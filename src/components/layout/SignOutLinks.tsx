import React from "react";

// third party
import { NavLink } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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
  })
);

const SignedOutLinks = () => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      <li className={classes.button}>
        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
          <Button
            startIcon={<ArrowRightIcon />}
            variant="contained"
            color="secondary"
          >
            Sign Up
          </Button>
        </NavLink>
      </li>
      <li className={classes.button}>
        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
          <Button
            startIcon={<AccountCircleIcon />}
            variant="contained"
            color="secondary"
          >
            Log In
          </Button>
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
