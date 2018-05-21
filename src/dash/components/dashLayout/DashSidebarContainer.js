import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

import DashButton from "../common/DashButton";
import DashMenuItem from "./DashMenuItem";
import DashMenuSubItem from "./DashMenuSubItem";

const styles = {
  drawerPaper: {
    width: "300px",
    background: "#fff"
  },
  dividerRoot: {
    width: "90%",
    margin: "0 auto"
  }
};

class DashSidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursesOpen: false,
      liveSessionsOpen: false,
      websiteUsersOpen: false,
      instructorsOpen: false,
      contentOpen: false,
      otherAdminsOpen: false,
      rolesOpen: false
    };

    this.handleOpenCourses = this.handleOpenCourses.bind(this);
    this.handleOpenSessions = this.handleOpenSessions.bind(this);
    this.handleOpenUsers = this.handleOpenUsers.bind(this);
    this.handleOpenInstructors = this.handleOpenInstructors.bind(this);
    this.handleOpenContent = this.handleOpenContent.bind(this);
    this.handleOpenAdmin = this.handleOpenAdmin.bind(this);
    this.handleOpenRoles = this.handleOpenRoles.bind(this);
  }

  handleOpenCourses() {
    this.setState({
      coursesOpen: !this.state.coursesOpen
    });
  }

  handleOpenSessions() {
    this.setState({
      liveSessionsOpen: !this.state.liveSessionsOpen
    });
    console.log(this.state);
  }

  handleOpenUsers() {
    this.setState({
      websiteUsersOpen: !this.state.websiteUsersOpen
    });
  }

  handleOpenInstructors() {
    this.setState({
      instructorsOpen: !this.state.instructorsOpen
    });
  }

  handleOpenContent() {
    this.setState({
      contentOpen: !this.state.contentOpen
    });
  }

  handleOpenAdmin() {
    this.setState({
      otherAdminsOpen: !this.state.otherAdminsOpen
    });
  }

  handleOpenRoles() {
    this.setState({
      rolesOpen: !this.state.rolesOpen
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
          open={true}
          variant="permanent"
          width={this.width}
        >
          <List>
            {/* <ListItem>
              <ListItemIcon>
                <img src="http://placehold.it/30" alt="" />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItem> */}
            <DashMenuItem listItemText="Dashboard" listIconSrc="http://placehold.it/50" />
            <Divider light={true} classes={{ root: classes.dividerRoot }} />

            <ListItem onClick={this.handleOpenCourses}>
              <ListItemIcon>
                <img src="http://placehold.it/30" alt="" />
              </ListItemIcon>
              <ListItemText>Manage Courses</ListItemText>
            </ListItem>
            <Divider light={true} classes={{ root: classes.dividerRoot }} />
            <Collapse in={this.state.coursesOpen}>
              <List>
                <ListItem>
                  <ListItemText>Some Text</ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem onClick={this.handleOpenSessions}>
              <ListItemIcon>
                <img src="http://placehold.it/30" alt="" />
              </ListItemIcon>
              <ListItemText>Manage Live Sessions</ListItemText>
            </ListItem>
            <Divider light={true} classes={{ root: classes.dividerRoot }} />
            <Collapse in={this.state.liveSessionsOpen}>
              <List>
                <ListItem>
                  <ListItemText>Some Text</ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem onClick={this.handleOpenUsers}>
              <ListItemIcon>
                <img src="http://placehold.it/30" alt="" />
              </ListItemIcon>
              <ListItemText>Manage Website Users</ListItemText>
            </ListItem>
            <Divider light={true} classes={{ root: classes.dividerRoot }} />
            <Collapse in={this.state.websiteUsersOpen}>
              <List>
                <ListItem>
                  <ListItemText>Some Text</ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem onClick={this.handleOpenInstructors}>
              <ListItemIcon>
                <img src="http://placehold.it/30" alt="" />
              </ListItemIcon>
              <ListItemText>Manage Instructors</ListItemText>
            </ListItem>
            <Divider light={true} classes={{ root: classes.dividerRoot }} />
            <Collapse in={this.state.instructorsOpen}>
              <List>
                <ListItem>
                  <ListItemText>Some Text</ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem onClick={this.handleOpenContent}>
              <ListItemIcon>
                <img src="http://placehold.it/30" alt="" />
              </ListItemIcon>
              <ListItemText>Manage Content</ListItemText>
            </ListItem>
            <Divider light={true} classes={{ root: classes.dividerRoot }} />
            <Collapse in={this.state.contentOpen}>
              <List>
                <ListItem>
                  <ListItemText>Some Text</ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem>
              <ListItemIcon>
                <img src="http://placehold.it/30" alt="" />
              </ListItemIcon>
              <ListItemText>Our Contact Box</ListItemText>
            </ListItem>
            <Divider light={true} classes={{ root: classes.dividerRoot }} />

            <ListItem onClick={this.handleOpenAdmin}>
              <ListItemIcon>
                <img src="http://placehold.it/30" alt="" />
              </ListItemIcon>
              <ListItemText>Manage Other Admins</ListItemText>
            </ListItem>
            <Divider light={true} classes={{ root: classes.dividerRoot }} />
            <Collapse in={this.state.otherAdminsOpen}>
              <List>
                <ListItem>
                  <ListItemText>Some Text</ListItemText>
                </ListItem>
              </List>
            </Collapse>

            <ListItem onClick={this.handleOpenRoles}>
              <ListItemIcon>
                <img src="http://placehold.it/30" alt="" />
              </ListItemIcon>
              <ListItemText>Manage Roles</ListItemText>
            </ListItem>
            <Divider light={true} classes={{ root: classes.dividerRoot }} />
            <Collapse in={this.state.rolesOpen}>
              <List>
                <ListItem component="a" href="#">
                  <ListItemText>Some Text</ListItemText>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
        <DashButton>Test</DashButton>
      </div>
    );
  }
}

export default withStyles(styles)(DashSidebarContainer);
