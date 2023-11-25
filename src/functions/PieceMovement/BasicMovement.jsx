import { EmptyPiece } from "../../components/Piece";
import { pieceStep } from "./PieceStep";

export const movePiece = (sourceTile, targetTile) => {
  targetTile.piece = sourceTile.piece;
  sourceTile.piece = EmptyPiece();

  targetTile.piece.step += 1;
};

export const checkValidMove = (source, target) => {
  return source.tile === target?.tile || pieceStep(source);
};
