import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Label } from "reactstrap";
import ChessBoard from "../ChessBoard/ChessBoard";
import { getDefaultPieces, getEmptyTiles } from "../../constructor/Tiles";
import { getTile, updateAllTiles } from "../../functions/Tiles";
import { PieceSide, getSideTurn } from "../../constant/PieceSide";
import PieceType from "../../constant/PieceType";
import { movePiece } from "../../functions/PieceMovement/BasicMovement";
import DemoOperations from "./DemoOperations";
import GameMode from "../../constant/GameMode";
import { isPawnMoveToTop } from "../../functions/validations/PawnPromotion";
import ModalPawnPromotion from "../ModalPawnPromotion";

const ChessBoardContain = () => {
  const [tileList, setTileList] = useState(getEmptyTiles());

  const [sideTurn, setSideTurn] = useState(PieceSide.White);
  const toggleSideTurn = () =>
    setSideTurn(
      sideTurn === PieceSide.White ? PieceSide.Black : PieceSide.White
    );

  const [sourcePiece, setSourcePiece] = useState(null);
  const [operationPiece, setOperationPiece] = useState(null);

  const [modalPawnPromoteOpen, setModalPawnPromoteOpen] = useState(false);
  const toggleModalPawnPromote = () =>
    setModalPawnPromoteOpen(!modalPawnPromoteOpen);

  useEffect(() => {
    setTileList(updateAllTiles(getEmptyTiles(), getDefaultPieces()));
  }, []);

  useEffect(() => {}, [sourcePiece]);

  const handleClickEvent = (tile) => {
    const selectedTile = getTile(tileList, tile);

    if (operationPiece === null) {
      if (sourcePiece === null) {
        if (selectedTile.piece.type !== PieceType.Empty)
          setSourcePiece(selectedTile);
      } else if (sourcePiece.tile === tile) {
        setSourcePiece(null);
      } else {
        if (isPawnMoveToTop(sourcePiece, selectedTile)) {
          toggleModalPawnPromote();
          movePiece(sourcePiece, selectedTile);
          setSourcePiece(selectedTile);
          toggleSideTurn();
        } else {
          movePiece(sourcePiece, selectedTile);
          setSourcePiece(null);
          toggleSideTurn();
        }
      }
    } else {
      movePiece(operationPiece, selectedTile);
      setOperationPiece(null);
    }
  };

  const handleOperationsClickEvent = (operation) => {
    var newItem = {};
    for (var i in operation.item) newItem[i] = operation.item[i];

    if (operationPiece === null) {
      setOperationPiece({ piece: newItem });
    } else if (
      operationPiece.piece.side === newItem.side &&
      operationPiece.piece.type === newItem.type
    ) {
      setOperationPiece(null);
    } else {
      setOperationPiece({ piece: newItem });
    }
  };

  const handlePawnChange = (item) => {
    sourcePiece.piece = item.item;
    setSourcePiece(null);
  };

  console.log(sourcePiece);

  return (
    <Fragment>
      <Container fluid>
        <div className="d-flex text-center">
          <Col>
            <Label>
              <strong>Demo</strong>
            </Label>
            <ChessBoard
              tileItems={tileList}
              sourcePiece={sourcePiece}
              sideTurn={sideTurn}
              handleClickEvent={handleClickEvent}
              modalPawnOpen={modalPawnPromoteOpen}
              toggleModalPawn={toggleModalPawnPromote}
              gameMode={GameMode.Demo}
            />
          </Col>
          <Col sm={1} md={1} lg={1}>
            <DemoOperations handleClickEvent={handleOperationsClickEvent} />
          </Col>
        </div>
        <ModalPawnPromotion
          tile={sourcePiece}
          modalOpen={modalPawnPromoteOpen}
          toggle={toggleModalPawnPromote}
          handleClick={handlePawnChange}
        />
      </Container>
    </Fragment>
  );
};

export default ChessBoardContain;
