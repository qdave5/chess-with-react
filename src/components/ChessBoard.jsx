import React from "react";
import { Col, Container, Row } from "reactstrap";
import ChessBoardTile from "./ChessBoardTile";

const ChessBoard = ({ tileItems }) => {
  return (
    <div>
      <Container fluid className="d-flex justify-content-center w-75 h-75">
        <Row className="align-items-center">
          {tileItems.map((row) => (
            <>
              {row.map((cell) => {
                return (
                  <Col style={{ width: "12.5%" }}>
                    <ChessBoardTile piece={cell} />
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
