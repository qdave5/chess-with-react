import React, { Fragment } from "react";
import { Container, Col } from "reactstrap";
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
