import React, { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";
import ChessBoardTile from "./ChessBoardTile";

const ChessBoard = ({ tileItems, handleClickEvent }) => {
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

export default ChessBoard;
