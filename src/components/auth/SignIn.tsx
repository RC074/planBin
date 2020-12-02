import React, { Component } from "react";

// third party
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// stylesheets
import classes from "./auth.module.css";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className={classes.container}>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign In</h1>
          <div>
            <TextField
              id="email"
              className={classes.input}
              onChange={this.handleChange}
              color="secondary"
              label="Email"
            />
            <TextField
              id="password"
              type="password"
              className={classes.input}
              onChange={this.handleChange}
              color="secondary"
              label="Password"
            />
            <div className={classes.btn}>
              <Button type="submit" variant="contained" color="secondary">
                LOGIN
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
