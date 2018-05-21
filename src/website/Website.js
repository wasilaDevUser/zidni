import React, { Component } from "react";
import AuthFormWrapper from "./components/authentication/AuthFormWrapper";

class Website extends Component {
  render() {
    return (
      <div className="App">
        <AuthFormWrapper />
      </div>
    );
  }
}

export default Website;
