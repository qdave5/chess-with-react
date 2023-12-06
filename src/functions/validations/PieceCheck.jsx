import { PieceSide } from "../../constant/PieceSide";
import PieceType from "../../constant/PieceType";

export const isAllEmptyPieces = (listTile) =>
  listTile.filter((tile) => isEmptyType(tile)).length === listTile.length;

export const isStillNotMove = (tile) => tile.piece?.step === 0;

// type check
const isCorrectType = (type) => (tile) => tile.piece?.type === type;

export const isPawnType = isCorrectType(PieceType.Pawn);
export const isBishopType = isCorrectType(PieceType.Bishop);
export const isKnightType = isCorrectType(PieceType.Knight);
export const isRookType = isCorrectType(PieceType.Rook);
export const isQueenType = isCorrectType(PieceType.Queen);
export const isKingType = isCorrectType(PieceType.King);

export const isEmptyType = isCorrectType(PieceType.Empty);

// side check
const isCorrectSide = (side) => (tile) => tile.piece?.side === side;

export const isWhiteSide = isCorrectSide(PieceSide.White);
export const isBlackSide = isCorrectSide(PieceSide.Black);
