import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  itemRoot: {
    borderLeft: "3px solid transparent",
    transition: "all linear .2s",

    "&:hover": {
      background: "#01273F",
      borderLeft: "3px solid yellow"
    }
  },

  itemTextRoot: {
    color: "#01273F",
    fontWeight: "500",
    transition: "all linear .2s",

    "&:hover": {
      color: "#fff"
    }
  }
};

const DashMenuItem = props => {
  return (
    <ListItem classes={{ root: props.classes.itemRoot }}>
      <ListItemIcon>
        <img src={props.listIconSrc} alt="" />
      </ListItemIcon>
      <ListItemText classes={{ primary: props.classes.itemTextRoot }}>
        {props.listItemText}
      </ListItemText>
    </ListItem>
  );
};

export default withStyles(styles)(DashMenuItem);
