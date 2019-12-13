import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class VerticalMenu extends Component {
  state = { activeItem: "dashboard" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fluid inverted vertical>
        <NavLink to={"/appointments"} exact>
          <Menu.Item
            name="appointments"
            active={activeItem === "appointments"}
            onClick={this.handleItemClick}
          >
            <Icon name="calendar" />
            Appointments
          </Menu.Item>
        </NavLink>

        <NavLink to={"/patients"} exact>
          <Menu.Item
            name="patients"
            active={activeItem === "patients"}
            onClick={this.handleItemClick}
          >
            <Icon name="users" />
            Patients
          </Menu.Item>
        </NavLink>
      </Menu>
    );
  }
}
