import React from "react";

// third party
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// App modules
import Plan from "./Plan";
import { RootState } from "../../store/reducers/rootReducer";

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

const PlanList = ({ plans }: { plans: RootState["plan"]["plans"] }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={8} className={classes.root}>
      {plans &&
        plans.map((plan) => {
          return <Plan plan={plan} key={plan.id} />;
        })}
    </Grid>
  );
};

export default PlanList;
