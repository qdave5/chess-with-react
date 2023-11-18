import { getIndexFromRowCol } from "..";
import { PieceSide } from "../../constant/PieceSide";
import PieceType from "../../constant/PieceType";
import {
  stepDown,
  stepDownAll,
  stepDownLeft,
  stepDownLeftAll,
  stepDownRight,
  stepDownRightAll,
  stepLeft,
  stepLeftAll,
  stepRight,
  stepRightAll,
  stepUp,
  stepUpAll,
  stepUpLeft,
  stepUpLeftAll,
  stepUpRight,
  stepUpRightAll,
} from "./Step";

export const pieceStep = (tileList, source, target) => {
  switch (source.piece?.type) {
    case PieceType.Pawn:
      return pawnStep(tileList, source, target);
    case PieceType.Bishop:
      return bishopStep(tileList, source, target);
    case PieceType.Knight:
      return knightStep(tileList, source, target);
    case PieceType.Rook:
      return rookStep(tileList, source, target);
    case PieceType.Queen:
      return queenStep(tileList, source, target);
    case PieceType.King:
      return kingStep(tileList, source, target);
  }
};

export const pawnStep = (tileList, source, target) => {
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

  console.log("list", stepIdxList);
  return stepIdxList;
};

export const bishopStep = (tileList, source, target) => {
  // TODO
  const idx = getIndexFromRowCol(source.row, source.col);

  const stepIdxList = [
    stepUpRightAll(idx),
    stepUpLeftAll(idx),
    stepDownRightAll(idx),
    stepDownLeftAll(idx),
  ].flat();

  return stepIdxList;
};

export const knightStep = (tileList, source, target) => {
  // TODO
  const idx = getIndexFromRowCol(source.row, source.col);

  const stepIdxList = [];

  return stepIdxList;
};

export const rookStep = (tileList, source, target) => {
  // TODO
  const idx = getIndexFromRowCol(source.row, source.col);

  const stepIdxList = [
    stepRightAll(idx),
    stepLeftAll(idx),
    stepUpAll(idx),
    stepDownAll(idx),
  ].flat();

  return stepIdxList;
};

export const queenStep = (tileList, source, target) => {
  // TODO
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

export const kingStep = (tileList, source, target) => {
  // TODO
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
