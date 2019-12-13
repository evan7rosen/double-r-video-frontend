import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SideMenu extends Component {
  state = {
    activeItem: "dashboard"
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  changeSize = () => this.setState({ smallSidebar: !this.props.smallMenu });

  getMenu() {
    const { activeItem } = this.state;
    return (
      <Menu
        fixed="left"
        borderless
        className={(this.props.smallMenu ? "small-side" : "") + " side"}
        vertical
      >
        <Menu.Item
          as={Link}
          to={"/appointments"}
          name="appointments"
          active={activeItem === "appointments"}
          onClick={this.handleItemClick}
        >
          Appointments
        </Menu.Item>

        <Menu.Item
          as={Link}
          to={"/userManagement"}
          name="userManagement"
          active={activeItem === "userManagement"}
          onClick={this.handleItemClick}
        >
          Patients
        </Menu.Item>
      </Menu>
    );
  }

  render() {
    return (
      <div className="parent">
        <div className={(this.props.smallMenu ? "small-side " : "") + "side"}>
          {this.getMenu()}
        </div>
        <div
          className={(this.props.smallMenu ? "small-content " : "") + "content"}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect()(SideMenu);
