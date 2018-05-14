import React, { Component } from "react";
import styled from "styled-components";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

import FacebookLogin from "react-facebook-login";
import { Grid, Form, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import Button from "../common/Button";
import HelperText from "../common/HelperText";

const AuthLabel = styled.label`
  &&&& {
    display: inline-block;
    color: #01273f;
  }
`;

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: "",
        password: ""
      },
      isLoading: false,
      isShownPassword: false,
      loadingText: "Log In",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleShowPassword = this.handleShowPassword.bind(this);
  }

  style = {
    helperStyle: {
      float: "right"
    }
  };

  customErrorStyle = {
    color: "black"
  };

  validate = data => {
    const errors = {};
    if (isEmpty(this.state.data.email)) {
      errors.required = `This is a required field`;
    }

    if (!isEmail(this.state.data.email)) {
      errors.email = `Please Provide a Valid Email Address`;
    }

    if (this.state.data.password.length < 8) {
      errors.passwordLength = `Password must be greater than 8 characters!`;
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
      <Form onSubmit={this.handleSubmit}>
        <Grid>
          <Grid.Column width={16}>
            <Form.Field>
              <FacebookLogin />
            </Form.Field>
            <Divider horizontal>OR</Divider>
          </Grid.Column>

          <Grid.Column width={16}>
            <Form.Field>
              <AuthLabel htmlFor="email">Email</AuthLabel>
              <input type="email" name="email" id="email" />
              {(this.state.errors.required && (
                <HelperText>
                  {this.state.errors.required}
                </HelperText>
              )) ||
                (this.state.errors.email && (
                  <HelperText> {this.state.errors.email} </HelperText>
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
              />

              <HelperText
                href="#"
                style={this.style.helperStyle}
                color="#01273F"
              >
                Forgot Password?
              </HelperText>

              {(this.state.errors.required && (
                <HelperText color="red">
                  {this.state.errors.required}
                </HelperText>
              )) ||
                (this.state.errors.passwordLength && (
                  <HelperText>{this.state.errors.passwordLength}</HelperText>
                ))}
            </Form.Field>
          </Grid.Column>

          <Grid.Column width={16}>
            <Button
              type="submit"
              disabled={this.state.isLoading}
              style={this.style.buttonStyle}
              width="100%"
            >
              {this.state.loadingText}
            </Button>
          </Grid.Column>
        </Grid>
      </Form>
    );
  }
}

export default LoginForm;
