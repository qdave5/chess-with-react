import { getIndexFromRowCol } from "..";
import { EmptyPiece } from "../../components/Piece";
import { PieceSide } from "../../constant/PieceSide";
import PieceType from "../../constant/PieceType";
import { getTile } from "../Tiles";
import { pieceStep } from "./PieceStep";
import { stepDown, stepUp } from "./Step";

export const movePiece = (sourceTile, targetTile, tileList, totalStep) => {
  targetTile.piece = sourceTile.piece;
  sourceTile.piece = EmptyPiece();

  targetTile.piece.step += 1;
  targetTile.piece.lastMove = totalStep + 1 || -1;

  // en passant
  if (targetTile.piece.type === PieceType.Pawn) {
    let addRow = 0;
    if (targetTile.piece.side === PieceSide.White) {
      addRow = 1;
    } else {
      addRow = -1;
    }

    console.log(targetTile.row + addRow + "-" + targetTile.col);

    const behindPiece = getTile(
      tileList,
      targetTile.row + addRow + "-" + targetTile.col
    );

    if (behindPiece.piece.type === PieceType.Pawn) {
      behindPiece.piece = EmptyPiece();
    }
  }
};

export const checkValidMove = (source, target) => {
  return source.tile === target?.tile || pieceStep(source);
};
