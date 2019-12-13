import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const TopNav = props => (
  <Menu inverted secondary size="large">
    <Link to={"/"}>
      <Menu.Item>Home</Menu.Item>
    </Link>
    <Link to={"/portfolio"}>
      <Menu.Item>Portfolio</Menu.Item>
    </Link>
    <Link to={"/contact"}>
      <Menu.Item>Contact</Menu.Item>
    </Link>
    <Link to={"/videos"}>
      <Menu.Item>View Your Videos</Menu.Item>
    </Link>
    <Link to={"/admin"}>
      <Menu.Item>Admin Portal</Menu.Item>
    </Link>
  </Menu>
);
