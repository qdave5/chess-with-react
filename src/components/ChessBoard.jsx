import React, { useEffect } from "react";
import { Container, Table } from "reactstrap";
import ChessBoardTile from "./ChessBoardTile";

const ChessBoard = ({ tileItems, handleClickEvent }) => {
  useEffect(() => {}, [tileItems]);

  return (
    <Container fluid className="d-flex justify-content-center w-75">
      <Table>
        {tileItems.map((row) => {
          return (
            <tr>
              {row.cols.map((cell) => (
                <td style={{ width: "12.5%" }}>
                  <ChessBoardTile
                    cell={cell}
                    handleClickEvent={handleClickEvent}
                  />
                </td>
              ))}
            </tr>
          );
        })}
      </Table>
    </Container>
  );
};

export default ChessBoard;
