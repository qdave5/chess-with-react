import { EmptyPiece } from "../../components/Piece";
import PieceType from "../../constant/PieceType";

export const movePiece = (sourceTile, targetTile) => {
  console.log("source", sourceTile);
  console.log("target", targetTile);

  targetTile.piece = sourceTile.piece;
  sourceTile.piece = EmptyPiece();

  console.log("source", sourceTile);
  console.log("target", targetTile);
};

export const checkValidMove = (source, target) => {
  return (
    target.piece?.type === PieceType.Empty ||
    source.piece?.side !== target.piece?.side
  );
};
