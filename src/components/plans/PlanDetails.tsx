import React from "react";

// third party
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      margin: "auto",
      top: 100,
      bottom: 0,
      left: 0,
      right: 0,
    },
    paper: {
      position: "relative",
      minHeight: 480,
      borderLeft: "10px solid " + theme.palette.primary.main,
    },
    avatar: {
      padding: theme.spacing(3),
      width: theme.spacing(3),
      float: "left",
      [theme.breakpoints.between("xs", "sm")]: {
        padding: theme.spacing(2),
        width: theme.spacing(1),
      },
    },
    largeAvatar: {
      width: theme.spacing(9),
      height: theme.spacing(9),
      fontSize: theme.spacing(4),
      [theme.breakpoints.between("xs", "sm")]: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        fontSize: theme.spacing(2),
      },
    },
    content: {
      width: "85%",
      padding: theme.spacing(4),
      paddingBottom: theme.spacing(15),
      marginLeft: theme.spacing(12),
      [theme.breakpoints.between("xs", "sm")]: {
        marginLeft: theme.spacing(7),
        padding: theme.spacing(2),
      },
    },
    title: {
      fontSize: theme.spacing(5),
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: theme.spacing(3),
      },
    },
    body: {
      margin: theme.spacing(0.5),
      marginTop: theme.spacing(2),
      fontSize: theme.spacing(2.5),
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: theme.spacing(1.7),
      },
    },
    footerWrapper: {},
    footer: {
      position: "absolute",
      width: "100%",
      height: theme.spacing(12),
      marginRight: theme.spacing(3),
      marginTop: "10%",
      bottom: 0,
    },
    footerText: {
      marginLeft: "6%",
      marginTop: theme.spacing(1),
    },
    divider: {
      marginBottom: theme.spacing(2),
      margin: "auto",
      width: "90%",
    },
  })
);

interface IPlanDetailsProps {
  match: any;
}

const PlanDetails = ({ match }: IPlanDetailsProps) => {
  const classes = useStyles();
  const id = match.params.id;
  console.log("RL".charCodeAt(1));

  return (
    <Grid container spacing={3}>
      <Grid item xs={10} className={classes.root}>
        <Paper className={classes.paper}>
          <Grid item className={classes.avatar}>
            <Avatar className={classes.largeAvatar}>RL</Avatar>
          </Grid>
          <Grid item className={classes.content}>
            <Typography noWrap className={classes.title}>
              Project Title - {id}
            </Typography>
            <div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
              <Typography className={classes.body}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                pariatur ab et tempore, sed laboriosam nemo numquam qui error
                ratione aliquid voluptatum ducimus praesentium sit iure corrupti
                eligendi, aspernatur cupiditate.
              </Typography>
            </div>
          </Grid>

          <div className={classes.footerWrapper}>
            <Grid className={classes.footer}>
              <Divider className={classes.divider} />
              <Typography className={classes.footerText} color="textSecondary">
                Posted by Richard
              </Typography>
              <Typography className={classes.footerText} color="textSecondary">
                3rd September, 2am
              </Typography>
            </Grid>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PlanDetails;
