import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const TopNav = props => (
  <Menu inverted secondary size="large">
    <Link to={"/"}>
      <Menu.Item>Home</Menu.Item>
    </Link>
    <Link to={"/locations"}>
      <Menu.Item>Services</Menu.Item>
    </Link>
    <Link to={"/portfolio"}>
      <Menu.Item>Portfolio</Menu.Item>
    </Link>
    <Link to={"/inventory"}>
      <Menu.Item>About</Menu.Item>
    </Link>
    <Link to={"/inventory"}>
      <Menu.Item>Contact</Menu.Item>
    </Link>
    <Link to={"/inventory"}>
      <Menu.Item>View Your Videos</Menu.Item>
    </Link>
  </Menu>
);
