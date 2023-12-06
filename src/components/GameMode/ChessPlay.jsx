import React, { Fragment } from "react";
import { Container } from "reactstrap";
import ChessBoard from "../ChessBoard/ChessBoard";
import GameMode from "../../constant/GameMode";

const ChessBoardContain = () => {
  return (
    <Fragment>
      <Container fluid>
        <ChessBoard gameMode={GameMode.Normal} />
      </Container>
    </Fragment>
  );
};

export default ChessBoardContain;
