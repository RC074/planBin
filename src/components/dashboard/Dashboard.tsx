import React from "react";

// third party
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

// App modules
import Notifications from "./Notifications";
import PlanList from "../plans/PlanList";
import { RootState } from "../../store/reducers/rootReducer";

class Dashboard extends React.Component<{ plans: RootState["plan"]["plans"] }> {
  render() {
    const { plans } = this.props;

    return (
      <div className="container">
        <Grid container>
          <PlanList plans={plans} />
          <Notifications />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    plans: state.plan.plans,
  };
};

export default connect(mapStateToProps)(Dashboard);
