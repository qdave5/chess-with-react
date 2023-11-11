import React, { Fragment } from "react";
import { Container, Col, Row } from "reactstrap";
import { Outlet } from "react-router-dom";
import NavbarLayout from "./Navbar";

const Layout = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col>
            <NavbarLayout />
          </Col>
          <Col xs={9} md={9} xl={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Layout;
