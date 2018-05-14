import React, { Component } from "react";
import styled from "styled-components";

import FacebookButton from "react-facebook-login";
import { Grid, Form, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

import Button from "../common/Button";
import HelperText from "../common/HelperText";

const AuthLabel = styled.label`
  &&&& {
    display: inline-block;
    color: #01273f;
  }
`;

const Msg = HelperText.withComponent("span");

const ErrorMsg = Msg.extend`
  color: red;
`;

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
    this.handleShowPassword = this.handleShowPassword.bind(this)
  }

  validate = data => {
    const errors = {};
    if (isEmpty(this.state.data.email)) {
      errors.emailRequired = `This is a required field`;
    }

    if (isEmpty(this.state.data.firstName)) {
      errors.firstRequired = `This is a required field`;
    }

    if (isEmpty(this.state.data.lastName)) {
      errors.lastRequired = `This is a required field`;
    }

    if (!isEmail(this.state.data.email)) {
      errors.email = `Please Provide a Valid Email Address`;
    }

    if (this.state.data.password.length < 8) {
      errors.passwordLength = `Password must be greater than 8 characters`;
    }
    return errors;
  };

  handleSubmit(e) {
    const errors = this.state.data;
    e.preventDefault();
    this.setState({
      isLoading: true,
      loadingText: "Loading",
      errors: this.validate({ errors })
    });
  }

  handleChange(e) {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  }

  handleShowPassword(e) {
    e.preventDefault();
    this.setState({
      isShownPassword: !this.state.isShownPassword
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
              <AuthLabel htmlFor="firstName">First Name</AuthLabel>
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={this.handleChange}
              />
              {this.state.errors.firstRequired && (
                <ErrorMsg>{this.state.errors.firstRequired}</ErrorMsg>
              )}
            </Form.Field>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Form.Field>
              <AuthLabel htmlFor="lastName">Last Name</AuthLabel>
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={this.handleChange}
              />
              {this.state.errors.lastRequired && (
                <ErrorMsg>{this.state.errors.lastRequired}</ErrorMsg>
              )}
            </Form.Field>
          </Grid.Column>

          <Grid.Column width={16}>
            <Form.Field>
              <AuthLabel htmlFor="email">Email Address</AuthLabel>
              <input
                type="email"
                name="email"
                id="email"
                onChange={this.handleChange}
              />

              {(this.state.errors.emailRequired && (
                <ErrorMsg>{this.state.errors.emailRequired}</ErrorMsg>
              )) ||
                (this.state.errors.email && (
                  <ErrorMsg> {this.state.errors.email} </ErrorMsg>
                ))}
            </Form.Field>
          </Grid.Column>

          <Grid.Column width={16}>
            <Form.Field>
              <AuthLabel htmlFor="password">Password</AuthLabel>
              <HelperText
                href="#"
                color="#01273F"
                style={{ float: "right" }}
                onClick={this.handleShowPassword}
              >
                {this.state.isShownPassword ? "Hide Password" : "Show Password"}
              </HelperText>
              <input
                type={this.state.isShownPassword ? "text" : "password"}
                name="password"
                id="password"
                onChange={this.handleChange}
              />
              {(this.state.errors.required && (
                <ErrorMsg>{this.state.errors.required}</ErrorMsg>
              )) ||
                (this.state.errors.passwordLength && (
                  <ErrorMsg>{this.state.errors.passwordLength}</ErrorMsg>
                ))}
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
