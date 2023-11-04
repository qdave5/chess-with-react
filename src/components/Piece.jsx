import PieceType from "../constant/PieceType";

export const Piece = (type) => (image) => {
  return {
    type: type,
    image: image,
  };
};

export const PawnPiece = Piece(PieceType.Pawn);
export const KnightPiece = Piece(PieceType.Knight);
export const BishopPiece = Piece(PieceType.Bishop);
export const RookPiece = Piece(PieceType.Rook);
export const QueenPiece = Piece(PieceType.Queen);
export const KingPiece = Piece(PieceType.King);
