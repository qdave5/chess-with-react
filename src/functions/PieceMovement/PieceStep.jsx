import { getIndexFromRowCol } from "..";
import { PieceSide } from "../../constant/PieceSide";
import PieceType from "../../constant/PieceType";
import {
  step,
  stepDown,
  stepDownLeft,
  stepDownRight,
  stepUp,
  stepUpLeft,
  stepUpRight,
} from "./Step";

export const pieceStep = (tileList, source, target) => {
  switch (source.piece?.type) {
    case PieceType.Pawn:
      return pawnStep(tileList, source, target);
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
