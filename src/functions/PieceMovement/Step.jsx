const step = (func) => (idx) => {
  const newIdx = func(idx);
  return outOfBound(idx, newIdx) ? -1 : newIdx;
};
const step2 = (func1) => (func2) => (idx) => {
  const newIdx = func1(func2(idx));
  return outOfBound(idx, newIdx) ? -1 : newIdx;
};
const stepL = (func1) => (func2) => (idx) => {
  const newIdx = func1(func1(func2(idx)));
  return outOfBound(idx, newIdx) ? -1 : newIdx;
};

const outOfBound = (idx, newIdx) =>
  newIdx < 0 ||
  newIdx > 63 ||
  (idx % 8 === 0 && newIdx % 8 === 7) ||
  (idx % 8 === 7 && newIdx % 8 === 0);

export const stepRight = step((idx) => (idx !== -1 ? idx + 1 : idx));
export const stepLeft = step((idx) => (idx !== -1 ? idx - 1 : idx));
export const stepUp = step((idx) => (idx !== -1 ? idx - 8 : idx));
export const stepDown = step((idx) => (idx !== -1 ? idx + 8 : idx));
export const stepUpRight = step2(stepUp)(stepRight);
export const stepUpLeft = step2(stepUp)(stepLeft);
export const stepDownRight = step2(stepDown)(stepRight);
export const stepDownLeft = step2(stepDown)(stepLeft);

export const stepRightAll = (idx) => {
  const newIdx = stepRight(idx);
  return [newIdx].concat(newIdx !== -1 ? stepRightAll(newIdx) : []);
};
export const stepLeftAll = (idx) => {
  const newIdx = stepLeft(idx);
  return [newIdx].concat(newIdx !== -1 ? stepLeftAll(newIdx) : []);
};
export const stepUpAll = (idx) => {
  const newIdx = stepUp(idx);
  return [newIdx].concat(newIdx !== -1 ? stepUpAll(newIdx) : []);
};
export const stepDownAll = (idx) => {
  const newIdx = stepDown(idx);
  return [newIdx].concat(newIdx !== -1 ? stepDownAll(newIdx) : []);
};
export const stepUpRightAll = (idx) => {
  const newIdx = stepUpRight(idx);
  return [newIdx].concat(newIdx !== -1 ? stepUpRightAll(newIdx) : []);
};
export const stepUpLeftAll = (idx) => {
  const newIdx = stepUpLeft(idx);
  return [newIdx].concat(newIdx !== -1 ? stepUpLeftAll(newIdx) : []);
};
export const stepDownRightAll = (idx) => {
  const newIdx = stepDownRight(idx);
  return [newIdx].concat(newIdx !== -1 ? stepDownRightAll(newIdx) : []);
};
export const stepDownLeftAll = (idx) => {
  const newIdx = stepDownLeft(idx);
  return [newIdx].concat(newIdx !== -1 ? stepDownLeftAll(newIdx) : []);
};

export const stepRightUpKnight = stepL(stepRight)(stepUp);
export const stepRightDownKnight = stepL(stepRight)(stepDown);
export const stepLeftUpKnight = stepL(stepLeft)(stepUp);
export const stepLeftDownKnight = stepL(stepLeft)(stepDown);
export const stepUpRightKnight = stepL(stepUp)(stepRight);
export const stepUpLeftKnight = stepL(stepUp)(stepLeft);
export const stepDownRightKnight = stepL(stepDown)(stepRight);
export const stepDownLeftKnight = stepL(stepDown)(stepLeft);
