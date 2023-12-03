import PieceType from "../../constant/PieceType";

export const isPawnMoveToTop = (sourceTile, targetTile) => {
  console.log("source", sourceTile);
  console.log("target", targetTile);
  return sourceTile.piece.type === PieceType.Pawn && targetTile.row in [1, 8];
};
