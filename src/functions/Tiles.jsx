import { getIndexFromRowCol } from ".";

export const updateAllTiles = (tileList, newList) => {
  let newTileList = [];
  newTileList = tileList.map((prev) => {
    return {
      ...prev,
      piece: newList[getIndexFromRowCol(prev.row, prev.col)],
    };
  });

  return newTileList;
};

export const getTile = (tileList, target) => {
  const [row, col] = target.split("-");
  return tileList.find(
    (item) =>
      (item.row &&
        item.row === Number(row) &&
        item.col &&
        item.col === Number(col)) ||
      (item.tile && item.tile === target)
  );
};
