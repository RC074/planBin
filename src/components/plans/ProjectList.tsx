import React from "react";

// third party
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: theme.spacing(3),
      float: "left",
      [theme.breakpoints.between("xs", "sm")]: {
        marginLeft: theme.spacing(1),
      },
    },
    paper: {
      height: 160,
      borderLeft: "5px solid " + theme.palette.secondary.main,
    },
    avatar: {
      padding: theme.spacing(3),
      width: theme.spacing(3),
      float: "left",
    },
    content: {
      padding: theme.spacing(2),
      marginLeft: theme.spacing(9),
      fontSize: theme.spacing(3),
    },
    title: {
      fontSize: theme.spacing(3),
    },
    body: {},
    time: {
      textAlign: "right",
      marginRight: theme.spacing(3),
      marginTop: theme.spacing(3),
    },
  })
);

const ProjectList = () => {
  const classes = useStyles();

  return (
    <Grid container xs={12} md={8} className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid item className={classes.avatar}>
            <Avatar>RL</Avatar>
          </Grid>
          <Grid item className={classes.content}>
            <Typography className={classes.title}>Project Title</Typography>
            <Typography noWrap className={classes.body}>
              Eat dinner
            </Typography>
          </Grid>
          <Grid className={classes.time}>
            <Typography color="textSecondary">3rd September, 2am</Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid item className={classes.avatar}>
            <Avatar>RL</Avatar>
          </Grid>
          <Grid item className={classes.content}>
            <Typography className={classes.title}>Project Title</Typography>
            <Typography noWrap className={classes.body}>
              Eat dinner
            </Typography>
          </Grid>
          <Grid className={classes.time}>
            <Typography color="textSecondary">3rd September, 2am</Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid item className={classes.avatar}>
            <Avatar>RL</Avatar>
          </Grid>
          <Grid item className={classes.content}>
            <Typography className={classes.title}>Project Title</Typography>
            <Typography noWrap className={classes.body}>
              Eat dinner
            </Typography>
          </Grid>
          <Grid className={classes.time}>
            <Typography color="textSecondary">3rd September, 2am</Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProjectList;
