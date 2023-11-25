import { getIndexFromRowCol } from "..";
import { PieceSide } from "../../constant/PieceSide";
import PieceType from "../../constant/PieceType";
import {
  stepDown,
  stepDownAll,
  stepDownLeft,
  stepDownLeftAll,
  stepDownLeftKnight,
  stepDownRight,
  stepDownRightAll,
  stepDownRightKnight,
  stepLeft,
  stepLeftAll,
  stepLeftDownKnight,
  stepLeftUpKnight,
  stepRight,
  stepRightAll,
  stepRightDownKnight,
  stepRightUpKnight,
  stepUp,
  stepUpAll,
  stepUpLeft,
  stepUpLeftAll,
  stepUpLeftKnight,
  stepUpRight,
  stepUpRightAll,
  stepUpRightKnight,
} from "./Step";

export const pieceStep = (source) => {
  switch (source.piece?.type) {
    case PieceType.Pawn:
      return pawnStep(source);
    case PieceType.Bishop:
      return bishopStep(source);
    case PieceType.Knight:
      return knightStep(source);
    case PieceType.Rook:
      return rookStep(source);
    case PieceType.Queen:
      return queenStep(source);
    case PieceType.King:
      return kingStep(source);
  }
};

export const pawnStep = (source) => {
  const idx = getIndexFromRowCol(source.row, source.col);

  const stepIdxList =
    source.piece?.side === PieceSide.White
      ? [stepUp(idx), stepUpLeft(idx), stepUpRight(idx)]
      : [stepDown(idx), stepDownLeft(idx), stepDownRight(idx)];

  if (source.piece?.step === 0)
    stepIdxList.push(
      source.piece?.side === PieceSide.White
        ? stepUp(stepUp(idx))
        : stepDown(stepDown(idx))
    );

  return stepIdxList;
};

export const bishopStep = (source) => {
  const idx = getIndexFromRowCol(source.row, source.col);

  const stepIdxList = [
    stepUpRightAll(idx),
    stepUpLeftAll(idx),
    stepDownRightAll(idx),
    stepDownLeftAll(idx),
  ].flat();

  return stepIdxList;
};

export const knightStep = (source) => {
  const idx = getIndexFromRowCol(source.row, source.col);

  const stepIdxList = [
    stepRightUpKnight(idx),
    stepRightDownKnight(idx),
    stepLeftUpKnight(idx),
    stepLeftDownKnight(idx),
    stepUpRightKnight(idx),
    stepUpLeftKnight(idx),
    stepDownRightKnight(idx),
    stepDownLeftKnight(idx),
  ];

  return stepIdxList;
};

export const rookStep = (source) => {
  const idx = getIndexFromRowCol(source.row, source.col);

  const stepIdxList = [
    stepRightAll(idx),
    stepLeftAll(idx),
    stepUpAll(idx),
    stepDownAll(idx),
  ].flat();

  return stepIdxList;
};

export const queenStep = (source) => {
  const idx = getIndexFromRowCol(source.row, source.col);

  const stepIdxList = [
    stepRightAll(idx),
    stepLeftAll(idx),
    stepUpAll(idx),
    stepDownAll(idx),
    stepUpRightAll(idx),
    stepUpLeftAll(idx),
    stepDownRightAll(idx),
    stepDownLeftAll(idx),
  ].flat();

  return stepIdxList;
};

export const kingStep = (source) => {
  const idx = getIndexFromRowCol(source.row, source.col);

  const stepIdxList = [
    stepUp(idx),
    stepUpRight(idx),
    stepUpLeft(idx),
    stepRight(idx),
    stepLeft(idx),
    stepDown(idx),
    stepDownRight(idx),
    stepDownLeft(idx),
  ];

  return stepIdxList;
};
