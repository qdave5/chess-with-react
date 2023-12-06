import { getIndexFromRowCol } from "..";
import { EmptyPiece } from "../../components/Piece";
import { PieceSide } from "../../constant/PieceSide";
import PieceType from "../../constant/PieceType";
import { getTile } from "../Tiles";
import { isPawnType, isWhiteSide } from "../validations/PieceCheck";
import { pieceStep } from "./PieceStep";
import { stepDown, stepUp } from "./Step";

export const movePiece = (sourceTile, targetTile, tileList, totalStep) => {
  targetTile.piece = sourceTile.piece;
  sourceTile.piece = EmptyPiece();

  targetTile.piece.step += 1;
  targetTile.piece.lastMove = totalStep + 1 || -1;

  // en passant
  enPassant(targetTile, tileList);
};

const enPassant = (targetTile, tileList) => {
  if (isPawnType(targetTile)) {
    let addRow = 0;

    if (isWhiteSide(targetTile)) addRow = 1;
    else addRow = -1;

    const behindPiece = getTile(
      tileList,
      targetTile.row + addRow + "-" + targetTile.col
    );

    if (isPawnType(behindPiece)) {
      behindPiece.piece = EmptyPiece();
    }
  }
};

export const checkValidMove = (source, target) => {
  return source.tile === target?.tile || pieceStep(source);
};
