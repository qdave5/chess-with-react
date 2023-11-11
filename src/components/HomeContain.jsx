import React, { Fragment, useEffect, useState } from "react";
import { Container, Label } from "reactstrap";
import ChessBoard from "./ChessBoard";
import { getDefaultPieces, getEmptyTiles } from "../constructor/Tiles";
import { getTile, updateAllTiles } from "../functions/Tiles";
import { getSideTurn } from "../constant/PieceSide";
import PieceType from "../constant/PieceType";

const HomeContain = () => {
  const [tileList, setTileList] = useState(getEmptyTiles());

  const [sideTurn, setSideTurn] = useState(true);
  const toggleSideTurn = () => setSideTurn(!sideTurn);

  const [sourcePiece, setSourcePiece] = useState(null);

  useEffect(() => {
    setTileList(updateAllTiles(getEmptyTiles(), getDefaultPieces()));
  }, []);

  const handleClickEvent = (tile) => {
    const selectedTile = getTile(tileList, tile);

    if (sourcePiece === null) {
      if (selectedTile.piece.type !== PieceType.Empty)
        setSourcePiece(selectedTile);
    } else if (sourcePiece.tile === tile) {
      setSourcePiece(null);
    } else {
      // TODO: move piece to the new tile
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
            handleClickEvent={handleClickEvent}
          />
        </div>
      </Container>
    </Fragment>
  );
};

export default HomeContain;
