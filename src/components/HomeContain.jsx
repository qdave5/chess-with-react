import React, { Fragment, useState } from "react";
import { Container, Label } from "reactstrap";
import ChessBoard from "./ChessBoard";
import { getDefaultPieces, getEmptyTiles } from "../constructor/Tiles";
import { updateAllTiles } from "../functions/Tiles";
import { getSideTurn } from "../constant/PieceSide";

const HomeContain = () => {
  const [tileList, setTileList] = useState(
    updateAllTiles(getEmptyTiles(), getDefaultPieces())
  );

  const [sideTurn, setSideTurn] = useState(true);
  const toggleSideTurn = () => setSideTurn(!sideTurn);

  const handleClickEvent = (e) => {
    console.log("e", e);
    console.log("e.target", e.target.name);
  };

  console.log("tileList", tileList);

  return (
    <Fragment>
      <Container fluid>
        <Label>
          <strong>{getSideTurn(sideTurn)}'s Turn</strong>
        </Label>
        <div className="d-flex text-center">
          <ChessBoard
            tileItems={tileList}
            handleClickEvent={handleClickEvent}
          />
        </div>
      </Container>
    </Fragment>
  );
};

export default HomeContain;
