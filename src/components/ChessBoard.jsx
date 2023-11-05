import React from "react";
import { Col, Container, Row } from "reactstrap";
import ChessBoardTile from "./ChessBoardTile";
import { getColumnName } from "../functions";

const ChessBoard = ({ tileItems }) => {
  let rowInt = 0;
  let colInt = 9;
  return (
    <div>
      <Container fluid className="d-flex justify-content-center w-75">
        <Row className="align-items-center">
          {tileItems.map((row) => {
            colInt--;
            rowInt = 0;
            return (
              <>
                {row.map((cell) => {
                  rowInt++;
                  return (
                    <Col style={{ width: "12.5%" }}>
                      <ChessBoardTile
                        piece={cell}
                        tileLocation={`${colInt}${getColumnName(rowInt)}`}
                      />
                    </Col>
                  );
                })}
                <div className="w-100"></div>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ChessBoard;
