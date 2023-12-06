import React, { useEffect, useState } from "react";
import { Col, Container, Label, Table } from "reactstrap";
import ChessBoardTile from "./ChessBoardTile";
import {
  checkValidMove,
  movePiece,
} from "../../functions/PieceMovement/BasicMovement";
import { getIndexFromRowCol } from "../../functions";
import { isValidMove } from "../../functions/validations/isValidMove";
import GameMode from "../../constant/GameMode";
import ModalPawnPromotion from "../ModalPawnPromotion";
import DemoOperations from "../DemoComponents/DemoOperations";
import { getDefaultPieces, getEmptyTiles } from "../../constructor/Tiles";
import { getTile, updateAllTiles } from "../../functions/Tiles";
import PieceType from "../../constant/PieceType";
import { PieceSide } from "../../constant/PieceSide";
import { isPawnMoveToTop } from "../../functions/validations/PawnPromotion";

const ChessBoard = ({ gameMode }) => {
  const [tileList, setTileList] = useState(getEmptyTiles());

  const [totalStep, setTotalStep] = useState(0);
  const addStep = () => setTotalStep(totalStep + 1);

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

  const [tile8x8, setTile8x8] = useState([]);

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
        if (isPawnMoveToTop(sourcePiece, selectedTile, tileList)) {
          toggleModalPawnPromote();
          setSourcePiece(selectedTile);
        } else {
          setSourcePiece(null);
        }
        movePiece(sourcePiece, selectedTile, tileList, totalStep);
        toggleSideTurn();
        addStep();
      }
    } else {
      movePiece(operationPiece, selectedTile);
      setOperationPiece(null);
    }
  };

  useEffect(() => {
    let newTile = [[], [], [], [], [], [], [], []];
    let index = 0;
    tileList.forEach((item) => {
      const row = parseInt(index / 8);
      newTile[row].push(item);
      index++;
    });

    setTile8x8(newTile);
  }, [tileList]);

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
    <Container fluid className="d-flex justify-content-center w-75">
      <div className="d-flex text-center">
        <Col>
          <Label>
            <strong>
              {gameMode === GameMode.Normal ? sideTurn + "'s Turn" : gameMode}
            </strong>
          </Label>
          <Table>
            <tbody>
              {tile8x8?.map((row) => (
                <tr key={row[0]?.row}>
                  {row.map((cell) => (
                    <td style={{ width: "12.5%" }} key={cell.tile}>
                      <ChessBoardTile
                        cell={cell}
                        isActive={isButtonActive(
                          tileList,
                          sourcePiece,
                          cell,
                          sideTurn,
                          totalStep
                        )}
                        handleClickEvent={handleClickEvent}
                        gameMode={gameMode}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col sm={1} md={1} lg={1}>
          {gameMode === GameMode.Normal ? null : (
            <DemoOperations handleClickEvent={handleOperationsClickEvent} />
          )}
        </Col>
      </div>

      <ModalPawnPromotion
        tile={sourcePiece}
        modalOpen={modalPawnPromoteOpen}
        toggle={toggleModalPawnPromote}
        handleClick={handlePawnChange}
      />
    </Container>
  );
};

const isButtonActive = (tileItems, sourcePiece, cell, sideTurn, totalStep) => {
  return sourcePiece === null
    ? cell.piece?.side === sideTurn
    : sourcePiece === cell ||
        isValidMove(
          tileItems,
          sourcePiece,
          checkValidMove(sourcePiece),
          getIndexFromRowCol(cell.row, cell.col),
          totalStep
        );
};

export default ChessBoard;
