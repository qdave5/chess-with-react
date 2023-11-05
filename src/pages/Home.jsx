import React, { Fragment } from "react";
import { Container } from "reactstrap";
import HomeContain from "../components/HomeContain";

const Home = () => {
  return (
    <Fragment>
      <Container fluid>
        <HomeContain />
      </Container>
    </Fragment>
  );
};

export default Home;
