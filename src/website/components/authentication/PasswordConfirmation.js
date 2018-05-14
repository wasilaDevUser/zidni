import React, { Component } from 'react';
import Button from "../common/Button";

import { Form } from "semantic-ui-react";

class PasswordConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verificationCode: "",
      newPassword: "",
      passwordConfirm: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <Form>
        <h1>Password Reset</h1>
        <p>Enter Your New Password For Your Account</p>
        <Form.Field>
          <label htmlFor="verificatoion">Verification Code</label>
          <input type="text" name="verification" id="verification" />
        </Form.Field>

        <Form.Field>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="text"
            name="newPassword"
            id="newPassword"
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="passwordConfirm">Confirm New Password</label>
          <input
            type="text"
            name="passwordConfirm"
            id="passwordConfirm"
            onChange={this.handleChange}
          />
        </Form.Field>

        <Button>Change My Password</Button>
      </Form>
    );
  }
}

export default PasswordConfirmation;
