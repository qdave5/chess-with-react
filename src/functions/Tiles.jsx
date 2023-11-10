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
