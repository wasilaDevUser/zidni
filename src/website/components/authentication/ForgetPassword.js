import React, { Component } from "react";

import Button from "../common/Button";
import { Form } from "semantic-ui-react";

const ForgetPassword = () => (
  <Form>
    <h1>Reset Your Password</h1>
    <p>
      Please provide the email address you used when you signed up for Zidni
    </p>
    <p>
      We will send you an email with verification code to reset your password
    </p>

    <Form.Field>
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" id="email" />
    </Form.Field>

    <Button width="100%">Send Email</Button>
  </Form>
);

export default ForgetPassword;
