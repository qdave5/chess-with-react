import {
  IconChess,
  IconChessBishop,
  IconChessKing,
  IconChessKnight,
  IconChessQueen,
  IconChessQueenFilled,
  IconChessRook,
  IconChessBishopFilled,
  IconChessFilled,
  IconChessKingFilled,
  IconChessKnightFilled,
  IconChessRookFilled,
} from "@tabler/icons-react";
import React from "react";
import { Col, Row } from "reactstrap";

const blackList = [
  <IconChessFilled />,
  <IconChessBishopFilled />,
  <IconChessKnightFilled />,
  <IconChessRookFilled />,
  <IconChessQueenFilled />,
  <IconChessKingFilled />,
];
const whiteList = [
  <IconChess />,
  <IconChessBishop />,
  <IconChessKnight />,
  <IconChessRook />,
  <IconChessQueen />,
  <IconChessKing />,
];

const DemoOperations = () => {
  return (
    <Row>
      {/* black team */}
      <Col className="btn-group-vertical my-3">
        {blackList.map((item) => {
          return (
            <button
              type="button"
              class="btn btn-light"
              style={{
                minWidth: "50px",
                minHeight: "50px",
                padding: "12.5%",
              }}
              name={"b-pawn"}
              // onClick={() => handleClickEvent("b-pawn")}
              color={"light"}
            >
              {item}
            </button>
          );
        })}
      </Col>
      {/* white team */}
      <Col className="btn-group-vertical my-3">
        {whiteList.map((item) => {
          return (
            <button
              type="button"
              class="btn btn-light"
              style={{
                minWidth: "50px",
                minHeight: "50px",
                padding: "12.5%",
              }}
              name={"b-pawn"}
              // onClick={() => handleClickEvent("b-pawn")}
              color={"light"}
            >
              {item}
            </button>
          );
        })}
      </Col>
    </Row>
  );
};

export default DemoOperations;
