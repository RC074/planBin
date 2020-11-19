import React from "react";

// App modules
import Notifications from "./Notifications";
import ProjectList from "../plans/ProjectList";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <ProjectList />
        <Notifications />
      </div>
    );
  }
}

export default Dashboard;
