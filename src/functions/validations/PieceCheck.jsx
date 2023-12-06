import PieceType from "../../constant/PieceType";

export const isAllEmptyPieces = (listTile) =>
  listTile.filter((tile) => tile.piece?.type === PieceType.Empty).length ===
  listTile.length;

export const isStillNotMove = (tile) => tile.piece?.step === 0;
