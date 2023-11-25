import { getIndexFromRowCol } from "..";
import { EmptyPiece } from "../../components/Piece";
import PieceType from "../../constant/PieceType";
import { pieceStep } from "./PieceStep";

export const movePiece = (sourceTile, targetTile) => {
  console.log("source", sourceTile);
  console.log("target", targetTile);

  targetTile.piece = sourceTile.piece;
  sourceTile.piece = EmptyPiece();

  targetTile.piece.step += 1;

  console.log("source", sourceTile);
  console.log("target", targetTile);
};

export const checkValidMove = (tileItems, source, target) => {
  return (
    source.tile === target.tile ||
    pieceStep(tileItems, source, target).includes(
      getIndexFromRowCol(target.row, target.col)
    )
    // source.piece?.side !== target.piece?.side
    // target.piece?.type === PieceType.Empty ||
  );
};
