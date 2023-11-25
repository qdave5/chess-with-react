import React, { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";
import ChessBoardTile from "./ChessBoardTile";
import { checkValidMove } from "../../functions/PieceMovement/BasicMovement";

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
    : checkValidMove(tileItems, sourcePiece, cell);
};

export default ChessBoard;