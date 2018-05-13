import React, { Component } from "react";

import FacebookButton from "react-facebook-login";
import { Grid, Form, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import Button from "../common/Button";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      isLoading: false,
      isShownPassword: false,
      loadingText: "Register",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({});
  }

  handleChange(e) {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  }

  render() {
    return (
      <Form action="" onSubmit={this.handleSubmit}>
        <Grid>
          <Grid.Column width={16}>
            <FacebookButton />
            <Divider horizontal>OR </Divider>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Form.Field>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" />
            </Form.Field>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Form.Field>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" />
            </Form.Field>
          </Grid.Column>

          <Grid.Column width={16}>
            <Form.Field>
              <label htmlFor="email">Email Address</label>
              <input type="text" name="email" id="email" />
            </Form.Field>
          </Grid.Column>

          <Grid.Column width={16}>
            <Form.Field>
              <label htmlFor="password">Password</label>
              <input
                type={this.state.isShownPassword ? "text" : "password"}
                name="password"
                id="password"
              />
            </Form.Field>
          </Grid.Column>
          <Grid.Column width={16}>
            <Button width="100%"> {this.state.loadingText} </Button>
          </Grid.Column>
        </Grid>
      </Form>
    );
  }
}

export default RegisterForm;
