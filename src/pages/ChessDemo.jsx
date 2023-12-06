import React, { Fragment } from "react";
import { Container } from "reactstrap";
import ChessBoardContain from "../components/GameMode/ChessDemo";

const ChessDemo = () => {
  return (
    <Fragment>
      <Container fluid>
        <ChessBoardContain />
      </Container>
    </Fragment>
  );
};

export default ChessDemo;
