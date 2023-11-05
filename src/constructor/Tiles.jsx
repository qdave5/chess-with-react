import {
  BishopPiece,
  KingPiece,
  KnightPiece,
  PawnPiece,
  QueenPiece,
  RookPiece,
} from "../components/Piece";
import { getSameRow } from "../constant/SameRow";
import { getColumnName } from "../functions";

export const getEmptyTiles = () => {
  let tileList = [];
  for (let row = 8; row >= 1; row--) {
    for (let col = 1; col <= 8; col++) {
      tileList.push({
        row: row,
        col: getColumnName(col),
        piece: null,
      });
    }
  }
  return tileList;
};

export const getDefaultPieces = () =>
  [
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
  ].flat();
