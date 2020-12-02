import React from "react";

// third party
import { NavLink } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
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
  })
);

const SignedOutLinks = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <ul className={classes.root}>
      <li className={classes.button}>
        <NavLink
          to="/signup"
          style={{ color: "white", textDecoration: "none" }}
        >
          {matches ? (
            <PersonAddIcon color="secondary" />
          ) : (
            <Button
              startIcon={<PersonAddIcon />}
              variant="contained"
              color="secondary"
            >
              SIGN UP
            </Button>
          )}
        </NavLink>
      </li>
      <li className={classes.button}>
        <NavLink
          to="/signin"
          style={{ color: "white", textDecoration: "none" }}
        >
          {matches ? (
            <AccountCircleIcon color="secondary" />
          ) : (
            <Button
              startIcon={<AccountCircleIcon />}
              variant="contained"
              color="secondary"
            >
              LOG IN
            </Button>
          )}
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
