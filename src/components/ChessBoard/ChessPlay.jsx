import React, { Fragment, useEffect, useState } from "react";
import { Container, Label } from "reactstrap";
import ChessBoard from "../ChessBoard/ChessBoard";
import { getDefaultPieces, getEmptyTiles } from "../../constructor/Tiles";
import { getTile, updateAllTiles } from "../../functions/Tiles";
import { PieceSide, getSideTurn } from "../../constant/PieceSide";
import PieceType from "../../constant/PieceType";
import { movePiece } from "../../functions/PieceMovement";

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
        <Label>
          <strong>{getSideTurn(sideTurn)}'s Turn</strong>
        </Label>
        <div className="d-flex text-center">
          <ChessBoard
            tileItems={tileList}
            sourcePiece={sourcePiece}
            sideTurn={sideTurn}
            handleClickEvent={handleClickEvent}
          />
        </div>
      </Container>
    </Fragment>
  );
};

export default ChessBoardContain;
