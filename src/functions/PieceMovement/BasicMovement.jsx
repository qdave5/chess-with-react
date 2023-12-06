import { getIndexFromRowCol } from "..";
import { EmptyPiece } from "../../components/Piece";
import { PieceSide } from "../../constant/PieceSide";
import PieceType from "../../constant/PieceType";
import { getTile } from "../Tiles";
import { isKingType, isPawnType, isWhiteSide } from "../validations/PieceCheck";
import { pieceStep } from "./PieceStep";
import { stepDown, stepUp } from "./Step";

export const movePiece = (sourceTile, targetTile, tileList, totalStep) => {
  targetTile.piece = sourceTile.piece;
  sourceTile.piece = EmptyPiece();

  targetTile.piece.step += 1;
  targetTile.piece.lastMove = totalStep + 1 || -1;

  // en passant
  enPassant(targetTile, tileList);

  // castling
  castling(sourceTile, targetTile, tileList);
};

const enPassant = (afterTile, tileList) => {
  if (isPawnType(afterTile)) {
    let addRow = 0;

    if (isWhiteSide(afterTile)) addRow = 1;
    else addRow = -1;

    const behindPiece = getTile(
      tileList,
      afterTile.row + addRow + "-" + afterTile.col
    );

    if (isPawnType(behindPiece)) {
      behindPiece.piece = EmptyPiece();
    }
  }
};

const castling = (beforeTile, afterTile, tileList) => {
  if (isKingType(afterTile)) {
    const beforeRookTile = getTile(
      tileList,
      afterTile.row + "-" + (afterTile.col < beforeTile.col ? 1 : 8)
    );
    const afterRookTile = getTile(
      tileList,
      afterTile.row + "-" + (beforeTile.col + afterTile.col) / 2
    );

    afterRookTile.piece = beforeRookTile.piece;
    beforeRookTile.piece = EmptyPiece();
  }
};

export const checkValidMove = (source, target) => {
  return source.tile === target?.tile || pieceStep(source);
};
