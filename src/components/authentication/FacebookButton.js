import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class FacebookButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.componentClicked = this.componentClicked.bind(this)
  }

  componentClicked() {
    console.log('Clicked!')
  }
  render() {
    return (
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
      />
    );
  }
}

export default FacebookButton;
