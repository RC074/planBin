import React from "react";

// third party
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// App modules
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignOutLinks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingLeft: 0,
      paddingRight: 0,
    },
    bar: {
      padding: "8px 0",
    },
    title: {
      flexGrow: 1,
      paddingLeft: 16,
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar className={classes.bar}>
          <Typography variant="h4" className={classes.title}>
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              PlanBin
            </Link>
          </Typography>
          <SignedInLinks />
          {/* <SignedOutLinks /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
