import React, { Fragment } from "react";
import { Container } from "reactstrap";
import ChessBoardContain from "../components/GameMode/ChessPlay";

const ChessPlay = () => {
  return (
    <Fragment>
      <Container fluid>
        <ChessBoardContain />
      </Container>
    </Fragment>
  );
};

export default ChessPlay;
