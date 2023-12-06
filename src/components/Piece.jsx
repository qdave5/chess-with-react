import {
  IconChess,
  IconChessBishop,
  IconChessBishopFilled,
  IconChessFilled,
  IconChessKing,
  IconChessKingFilled,
  IconChessKnight,
  IconChessKnightFilled,
  IconChessQueen,
  IconChessQueenFilled,
  IconChessRook,
  IconChessRookFilled,
} from "@tabler/icons-react";
import { PieceSide } from "../constant/PieceSide";
import PieceType from "../constant/PieceType";

export const Piece = (side) => (type) => (icon) => ({
  icon: icon,
  side: side,
  step: 0,
  type: type,
  lastMove: -1,
});

const WhitePiece = Piece(PieceSide.White);
const BlackPiece = Piece(PieceSide.Black);

export const EmptyPiece = () => Piece(PieceSide.Empty)(PieceType.Empty)(" ");

// White team
export const PawnWhitePiece = () => WhitePiece(PieceType.Pawn)(<IconChess />);
export const KnightWhitePiece = () =>
  WhitePiece(PieceType.Knight)(<IconChessKnight />);
export const BishopWhitePiece = () =>
  WhitePiece(PieceType.Bishop)(<IconChessBishop />);
export const RookWhitePiece = () =>
  WhitePiece(PieceType.Rook)(<IconChessRook />);
export const QueenWhitePiece = () =>
  WhitePiece(PieceType.Queen)(<IconChessQueen />);
export const KingWhitePiece = () =>
  WhitePiece(PieceType.King)(<IconChessKing />);

// Black side
export const PawnBlackPiece = () =>
  BlackPiece(PieceType.Pawn)(<IconChessFilled />);
export const KnightBlackPiece = () =>
  BlackPiece(PieceType.Knight)(<IconChessKnightFilled />);
export const BishopBlackPiece = () =>
  BlackPiece(PieceType.Bishop)(<IconChessBishopFilled />);
export const RookBlackPiece = () =>
  BlackPiece(PieceType.Rook)(<IconChessRookFilled />);
export const QueenBlackPiece = () =>
  BlackPiece(PieceType.Queen)(<IconChessQueenFilled />);
export const KingBlackPiece = () =>
  BlackPiece(PieceType.King)(<IconChessKingFilled />);
