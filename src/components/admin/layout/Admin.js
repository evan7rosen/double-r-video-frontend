import React from "react";
import { Route } from "react-router";
import Layout from "./Layout";
import Home from "../pages/Home";
import UserManagement from "../pages/UserManagement";
import CardForm from "../pages/Card";

export default () => (
  <Layout>
    <Route exact path="/admin" component={Home} />
    <Route path="/admin/userManagement" component={UserManagement} />
    <Route path="/admin/card" component={CardForm} />
  </Layout>
);
