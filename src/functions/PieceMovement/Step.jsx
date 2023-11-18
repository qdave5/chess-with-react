export const step = (func) => (idx) => {
  const newIdx = func(idx);
  return outOfBound(idx, newIdx) ? -1 : newIdx;
};
export const step2 = (func2) => (func) => (idx) => {
  const newIdx = func(func2(idx));
  return outOfBound(idx, newIdx) ? -1 : newIdx;
};

export const outOfBound = (idx, newIdx) =>
  newIdx < 0 ||
  newIdx > 63 ||
  (idx % 8 === 0 && newIdx % 8 === 7) ||
  (idx % 8 === 7 && newIdx % 8 === 0);

export const stepRight = step((idx) => idx + 1);
export const stepLeft = step((idx) => idx - 1);
export const stepUp = step((idx) => idx - 8);
export const stepDown = step((idx) => idx + 8);
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
