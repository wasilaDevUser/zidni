import React, { Component } from "react";
import DashSidebarContainer from './components/dashLayout/DashSidebarContainer'

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <DashSidebarContainer />
      </div>
    );
  }
}

export default Dashboard;
