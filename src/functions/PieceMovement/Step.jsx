export const step = (func) => (idx) => {
  const newIdx = func(idx);
  return outOfBound(idx, newIdx) ? -1 : newIdx;
};
export const step2 = (func2) => (func) => (idx) => {
  const newIdx = func(func2(idx));
  return outOfBound(idx, newIdx) ? -1 : newIdx;
};

export const outOfBound = (idx, newIdx) =>
  (idx % 8 === 0 && newIdx % 8 === 7) || (idx % 8 === 7 && newIdx % 8 === 0);

export const stepRight = step((idx) => idx + 1);
export const stepLeft = step((idx) => idx - 1);
export const stepUp = step((idx) => idx - 8);
export const stepDown = step((idx) => idx + 8);
export const stepUpRight = step2(stepUp)(stepRight);
export const stepUpLeft = step2(stepUp)(stepLeft);
export const stepDownRight = step2(stepDown)(stepRight);
export const stepDownLeft = step2(stepDown)(stepLeft);
