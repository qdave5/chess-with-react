import React, { Fragment, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Col,
} from "reactstrap";
import { Outlet } from "react-router-dom";
import NavbarLayout from "./Navbar";

const Layout = () => {
  return (
    <Fragment>
      <Container fluid>
        <Col>
          <NavbarLayout />
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Container>
    </Fragment>
  );
};

export default Layout;
