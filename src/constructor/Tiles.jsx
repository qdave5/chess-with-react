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
} from "../components/Piece";
import { getSameRow } from "../constant/SameRow";

export const getEmptyTiles = () => {
  let tileList = [];
  for (let index = 0; index < 64; index++) {
    const row = parseInt(index / 8) + 1;
    const col = (index % 8) + 1;
    tileList.push({
      row: row,
      col: col,
      tile: `${row}-${col}`,
      piece: <EmptyPiece />,
    });
  }
  return tileList;
};

export const getDefaultPieces = () =>
  [
    [
      RookBlackPiece(),
      KnightBlackPiece(),
      BishopBlackPiece(),
      QueenBlackPiece(),
      KingBlackPiece(),
      BishopBlackPiece(),
      KnightBlackPiece(),
      RookBlackPiece(),
    ],

    getSameRow(PawnBlackPiece()),
    getSameRow(EmptyPiece()),
    getSameRow(EmptyPiece()),
    getSameRow(EmptyPiece()),
    getSameRow(EmptyPiece()),
    getSameRow(PawnWhitePiece()),

    [
      RookWhitePiece(),
      KnightWhitePiece(),
      BishopWhitePiece(),
      QueenWhitePiece(),
      KingWhitePiece(),
      BishopWhitePiece(),
      KnightWhitePiece(),
      RookWhitePiece(),
    ],
  ].flat(1);
