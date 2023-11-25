import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Label } from "reactstrap";
import ChessBoard from "../ChessBoard/ChessBoard";
import { getDefaultPieces, getEmptyTiles } from "../../constructor/Tiles";
import { getTile, updateAllTiles } from "../../functions/Tiles";
import { PieceSide, getSideTurn } from "../../constant/PieceSide";
import PieceType from "../../constant/PieceType";
import { movePiece } from "../../functions/PieceMovement/BasicMovement";

const ChessBoardContain = () => {
  const [tileList, setTileList] = useState(getEmptyTiles());

  const [sideTurn, setSideTurn] = useState(PieceSide.White);
  const toggleSideTurn = () =>
    setSideTurn(
      sideTurn === PieceSide.White ? PieceSide.Black : PieceSide.White
    );

  const [sourcePiece, setSourcePiece] = useState(null);

  useEffect(() => {
    setTileList(updateAllTiles(getEmptyTiles(), getDefaultPieces()));
  }, []);

  useEffect(() => {}, [sourcePiece]);

  const handleClickEvent = (tile) => {
    const selectedTile = getTile(tileList, tile);

    if (sourcePiece === null) {
      if (selectedTile.piece.type !== PieceType.Empty)
        setSourcePiece(selectedTile);
    } else if (sourcePiece.tile === tile) {
      setSourcePiece(null);
    } else {
      movePiece(sourcePiece, selectedTile);
      setSourcePiece(null);
      toggleSideTurn();
    }
  };

  console.log(sourcePiece);

  return (
    <Fragment>
      <Container fluid>
        <div className="d-flex text-center">
          <Col>
            <Label>
              <strong>{sideTurn}'s Turn</strong>
            </Label>
            <ChessBoard
              tileItems={tileList}
              sourcePiece={sourcePiece}
              sideTurn={sideTurn}
              handleClickEvent={handleClickEvent}
            />
          </Col>
          <Col sm={1} md={1} lg={1}></Col>
        </div>
      </Container>
    </Fragment>
  );
};

export default ChessBoardContain;
