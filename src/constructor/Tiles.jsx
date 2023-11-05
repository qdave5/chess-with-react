import {
  BishopPiece,
  EmptyPiece,
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
  for (let row = 1; row <= 8; row++) {
    let colList = [];
    for (let col = 1; col <= 8; col++) {
      colList.push({ col: col, tile: `${row}-${col}`, piece: EmptyPiece() });
    }
    tileList.push({ row: row, cols: colList });
  }
  return tileList;
};

export const getDefaultPieces = () => [
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
  getSameRow(EmptyPiece()),
  getSameRow(EmptyPiece()),
  getSameRow(EmptyPiece()),
  getSameRow(EmptyPiece()),
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
