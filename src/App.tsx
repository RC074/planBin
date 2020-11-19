import React from "react";

// third party
import { BrowserRouter, Switch, Route } from "react-router-dom";

// App modules
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";

// stylesheets
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
