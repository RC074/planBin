import React from "react";

// third party
import { BrowserRouter, Switch, Route } from "react-router-dom";

// App modules
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import PlanDetails from "./components/plans/PlanDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreatePlan from "./components/plans/CreatePlan";

// stylesheets
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/plan/:id" component={PlanDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreatePlan} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
