import React, { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";
import ChessBoardTile from "./ChessBoardTile";
import { checkValidMove } from "../../functions/PieceMovement/BasicMovement";
import { getIndexFromRowCol } from "../../functions";
import { PieceSide } from "../../constant/PieceSide";

const ChessBoard = ({ tileItems, sourcePiece, sideTurn, handleClickEvent }) => {
  const [tile8x8, setTile8x8] = useState([]);

  useEffect(() => {
    let newTile = [[], [], [], [], [], [], [], []];
    let index = 0;
    tileItems.map((item) => {
      const row = parseInt(index / 8);
      newTile[row].push(item);
      index++;
    });

    setTile8x8(newTile);
  }, [tileItems]);

  return (
    <Container fluid className="d-flex justify-content-center w-75">
      <Table>
        <tbody>
          {tile8x8?.map((row) => (
            <tr key={row[0]?.row}>
              {row.map((cell) => (
                <td style={{ width: "12.5%" }} key={cell.tile}>
                  <ChessBoardTile
                    cell={cell}
                    isActive={isButtonActive(
                      tileItems,
                      sourcePiece,
                      cell,
                      sideTurn
                    )}
                    handleClickEvent={handleClickEvent}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const isButtonActive = (tileItems, sourcePiece, cell, sideTurn) => {
  return sourcePiece === null
    ? cell.piece?.side === sideTurn
    : sourcePiece === cell ||
        isValidMove(
          tileItems,
          sideTurn,
          checkValidMove(sourcePiece),
          getIndexFromRowCol(cell.row, cell.col)
        );
};

const isValidMove = (tileItems, sideTurn, validMove, index) => {
  const listValidMove = [];
  validMove.map((listIdx) => {
    let listTile = [];
    for (var idx = 0; idx < listIdx.length; idx++) {
      if (tileItems[listIdx[idx]]?.piece.side === PieceSide.Empty) {
        listTile.push(listIdx[idx]);
      } else if (tileItems[listIdx[idx]]?.piece.side === sideTurn) {
        break;
      } else {
        listTile.push(listIdx[idx]);
        break;
      }
    }

    listValidMove.push(listTile);
  });

  return listValidMove.flat().includes(index);
};

export default ChessBoard;
