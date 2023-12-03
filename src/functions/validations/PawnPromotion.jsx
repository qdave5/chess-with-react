import PieceType from "../../constant/PieceType";

export const isPawnMoveToTop = (sourceTile, targetTile) => {
  console.log("source", sourceTile);
  console.log("target", targetTile);
  return (
    sourceTile.piece.type === PieceType.Pawn && [1, 8].includes(targetTile.row)
  );
};
