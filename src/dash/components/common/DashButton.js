import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  button: {
    background: "transparent",
    border: "1px solid #01273F",
    color: "01273F",
    borderRadius: "5px",
    fontWeight: '500',
    boxShadow: '0 0 8px rgba(0,0,0,.8)',


    '&:hover': {
      color: '#fff',
      background: '#01273F'
    }
  }
};

const DashButton = props => {
  return <Button className={props.classes.button}>{props.children}</Button>;
};

export default withStyles(styles)(DashButton);
