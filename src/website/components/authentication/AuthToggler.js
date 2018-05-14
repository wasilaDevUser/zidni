import React, { Component } from "react";
import { Tab, Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgetPassword from "./ForgetPassword";
import PasswordConfirmation from "./PasswordConfirmation";

const AuthTabPane = styled(Tab.Pane)`
  &&& {
    border: none;
    box-shadow: none;
    margin-top: 2rem;

    /* &:after{
      content: "";
      width: 20px;
      height: 20px;
      background: #000;
      transform: rotate(45deg);
      position: absolute;
      z-index: 10000;
      top: 0;
      } */
  }
`;

const AuthTabMenuItem = styled(Menu.Item)`
  &&&&&& {
    color: #fff;
    border-bottom-color: ${props => (props.active ? "#fff" : "transparent")};
    position: relative;
    display: inline-block;

      

    &:hover {
      color: #fff;
      border-bottom-color: ${props => (props.active ? "#fff" : "transparent")};
    }
  }
`;

const handleClick = () => {
  this.active = true;
};

const panes = [
  {
    menuItem: (
      <AuthTabMenuItem key="login" onClick={handleClick}>
        Login
      </AuthTabMenuItem>
    ),
    render: () => (
      <AuthTabPane attached={false}>
        <LoginForm />
      </AuthTabPane>
    )
  },
  {
    menuItem: (
      <AuthTabMenuItem key="register" onClick={handleClick}>
        Register
      </AuthTabMenuItem>
    ),
    render: () => (
      <AuthTabPane attached={false}>
        <RegisterForm />
      </AuthTabPane>
    )
  },
  {
    menuItem: (
      <AuthTabMenuItem key="pass" onClick={handleClick}>
        confirm
      </AuthTabMenuItem>
    ),
    render: () => (
      <AuthTabPane attached={false}>
        <RegisterForm />
      </AuthTabPane>
    )
  },
  {
    menuItem: (
      <AuthTabMenuItem key="register" onClick={handleClick}>
        Register
      </AuthTabMenuItem>
    ),
    render: () => (
      <AuthTabPane attached={false}>
        <RegisterForm />
      </AuthTabPane>
    )
  }
];

const AuthToggler = () => {
  return (
    <div>
      <Tab menu={{ secondary: true, pointing: true, style: {display: "flex", justifyContent: "center"} }} panes={panes} />
    </div>
  );
};

export default AuthToggler;
