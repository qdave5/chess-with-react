import PieceType from "../../constant/PieceType";

export const isPawnMoveToTop = (sourceTile, targetTile) => {
  return (
    sourceTile.piece.type === PieceType.Pawn && [1, 8].includes(targetTile.row)
  );
};
