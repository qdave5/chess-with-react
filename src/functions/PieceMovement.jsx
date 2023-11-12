import { EmptyPiece } from "../components/Piece";

export const movePiece = (sourceTile, targetTile) => {
  console.log("source", sourceTile);
  console.log("target", targetTile);

  targetTile.piece = sourceTile.piece;
  sourceTile.piece = EmptyPiece();

  console.log("source", sourceTile);
  console.log("target", targetTile);
};
