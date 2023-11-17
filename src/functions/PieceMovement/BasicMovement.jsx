import { EmptyPiece } from "../../components/Piece";
import PieceType from "../../constant/PieceType";

export const movePiece = (sourceTile, targetTile) => {
  console.log("source", sourceTile);
  console.log("target", targetTile);

  targetTile.piece = sourceTile.piece;
  sourceTile.piece = EmptyPiece();

  targetTile.piece.step += 1;

  console.log("source", sourceTile);
  console.log("target", targetTile);
};

export const checkValidMove = (source, target) => {
  return (
    source.tile === target.tile ||
    target.piece?.type === PieceType.Empty ||
    source.piece?.side !== target.piece?.side
  );
};
