import React from "react";
import { Col, Row } from "reactstrap";
import PieceButton from "./ChessBoardTile";

const ChessBoard = ({ tileItems }) => {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          {tileItems.map((row) => (
            <>
              {row.map((cell) => {
                const pCell = <p>{cell}</p>;
                return (
                  <Col>
                    <PieceButton image={pCell} />
                  </Col>
                );
              })}
              <div className="w-100"></div>
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ChessBoard;
