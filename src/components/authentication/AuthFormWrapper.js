import React from "react";
import { Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import styled from "styled-components";

import AuthToggler from "./AuthToggler";
import Button from "../common/Button";


const AuthModal = styled(Modal)`
  &&& {
    margin-top: 1rem !important;
    margin-right: auto;
    margin-left: auto;
    box-shadow: none;
    background: transparent;
  }
`;

const AuthModalHeader = styled(Modal.Header)`
  &&& {
    display: flex;
    justify-content: center;
    background-color: transparent;
    color: #fff;
  }
`;

const AuthModalContent = styled(Modal.Content)`
  &&& {
    background: transparent;
  }
`;

const AuthenticationFormWrapper = props => {
  return (
    <AuthModal trigger={<Button>Open Dialog</Button>}>
      <AuthModalHeader>
        <img src="http://placehold.it/200" alt="" />
      </AuthModalHeader>
      <AuthModalContent>
        <AuthToggler />
      </AuthModalContent>
    </AuthModal>
  );
};

export default AuthenticationFormWrapper;
