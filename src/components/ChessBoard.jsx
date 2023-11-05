import React from "react";
import { Col, Container, Row } from "reactstrap";
import ChessBoardTile from "./ChessBoardTile";
import { getColumnName } from "../functions";

const ChessBoard = ({ tileItems, handleClickEvent }) => {
  return (
    <div>
      <Container fluid className="d-flex justify-content-center w-75">
        <Row className="align-items-center" xs={8}>
          {tileItems.map((tile) => {
            return (
              <>
                <Col>
                  <ChessBoardTile
                    piece={tile}
                    handleClickEvent={handleClickEvent}
                  />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ChessBoard;
