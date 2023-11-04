import {
  BishopPiece,
  KingPiece,
  KnightPiece,
  PawnPiece,
  QueenPiece,
  RookPiece,
} from "../components/Piece";
import { getSameRow } from "../constant/SameRow";

export const getDefaultTiles = () => [
  [
    RookPiece("BR"),
    KnightPiece("BK"),
    BishopPiece("BB"),
    KingPiece("BKing"),
    QueenPiece("BQueen"),
    BishopPiece("BB"),
    KnightPiece("BK"),
    RookPiece("BR"),
  ],
  getSameRow(PawnPiece("BP")),
  getSameRow(PawnPiece("")),
  getSameRow(PawnPiece("")),
  getSameRow(PawnPiece("")),
  getSameRow(PawnPiece("")),
  getSameRow(PawnPiece("WP")),
  [
    RookPiece("WR"),
    KnightPiece("WK"),
    BishopPiece("WB"),
    KingPiece("WKing"),
    QueenPiece("WQueen"),
    BishopPiece("WB"),
    KnightPiece("WK"),
    RookPiece("WR"),
  ],
];
