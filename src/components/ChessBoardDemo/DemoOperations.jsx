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
  IconCircle,
  IconCircleFilled,
  IconTrash,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import {
  BishopBlackPiece,
  BishopWhitePiece,
  EmptyPiece,
  KingBlackPiece,
  KingWhitePiece,
  KnightBlackPiece,
  KnightWhitePiece,
  PawnBlackPiece,
  PawnWhitePiece,
  QueenBlackPiece,
  QueenWhitePiece,
  RookBlackPiece,
  RookWhitePiece,
} from "../Piece";

const blackList = [
  PawnBlackPiece(),
  BishopBlackPiece(),
  KnightBlackPiece(),
  RookBlackPiece(),
  QueenBlackPiece(),
  KingBlackPiece(),
];
const whiteList = [
  PawnWhitePiece(),
  BishopWhitePiece(),
  KnightWhitePiece(),
  RookWhitePiece(),
  QueenWhitePiece(),
  KingWhitePiece(),
];

const DemoOperations = ({ handleClickEvent }) => {
  const [side, setSide] = useState(true);
  const toggleSide = () => setSide(!side);

  return (
    <Row>
      <Col className="btn-group-vertical my-3">
        <button
          type="button"
          class="btn btn-light"
          style={{
            minWidth: "50px",
            minHeight: "50px",
            padding: "12.5%",
          }}
          onClick={toggleSide}
        >
          {side ? <IconCircleFilled /> : <IconCircle />}
        </button>
      </Col>
      {side ? (
        // White Team
        <Col>
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
                onClick={() => handleClickEvent({ item: item })}
                color={"light"}
              >
                {item.icon}
              </button>
            );
          })}
        </Col>
      ) : (
        // Black Team
        <Col>
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
                onClick={() => handleClickEvent({ item: item })}
                color={"light"}
              >
                {item.icon}
              </button>
            );
          })}
        </Col>
      )}
      <Col className="btn-group-vertical my-3">
        <button
          type="button"
          class="btn btn-light"
          style={{
            minWidth: "50px",
            minHeight: "50px",
            padding: "12.5%",
          }}
          onClick={() => handleClickEvent({ item: EmptyPiece() })}
        >
          <IconTrash />
        </button>
      </Col>
    </Row>
  );
};

export default DemoOperations;
