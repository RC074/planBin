import React from "react";

// third party
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      float: "left",
      margin: theme.spacing(3),
      [theme.breakpoints.between("xs", "md")]: {
        marginLeft: theme.spacing(1),
      },
    },
    paper: {
      height: 160,
    },
  })
);

const Notifications = () => {
  const classes = useStyles();

  return (
    <Grid container xs={12} md={3} className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>Notifications</Paper>
      </Grid>
    </Grid>
  );
};

export default Notifications;
