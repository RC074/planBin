import React, { Component } from "react";

// third party
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

// App modules
import { createPlan } from "../../store/actions/planActions";
import { planState } from "../../store/reducers/planReducer";

// stylesheets
import classes from "../auth/auth.module.css";

class CreatePlan extends Component<{ createPlan: (plan: planState) => any }> {
  state = {
    id: "",
    title: "",
    content: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.createPlan(this.state);
  };

  render() {
    return (
      <div className={classes.container}>
        <form onSubmit={this.handleSubmit}>
          <h1>Create Plan</h1>
          <div>
            <TextField
              id="title"
              className={classes.input}
              onChange={this.handleChange}
              color="secondary"
              label="Title"
            />
            <TextField
              id="content"
              className={classes.content}
              variant="outlined"
              onChange={this.handleChange}
              color="secondary"
              label="Content"
              multiline
            />
            <div className={classes.btn}>
              <Button type="submit" variant="contained" color="secondary">
                CREATE
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createPlan,
};

export default connect(null, mapDispatchToProps)(CreatePlan);
