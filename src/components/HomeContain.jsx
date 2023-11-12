import React, { Fragment } from "react";
import { Button, Container, Label, Row } from "reactstrap";

const HomeContain = () => {
  return (
    <Fragment>
      <Container fluid>
        <div className="position-absolute top-50 start-50 translate-middle">
          <Row>
            <Label>
              <strong>Welcome</strong>
            </Label>
          </Row>
          <Row>
            <a href="/play" className="btn btn-primary">
              Play Chess
            </a>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default HomeContain;
