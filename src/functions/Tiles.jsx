import { getColumnName } from ".";

export const updateAllTiles = (tileList, newList) => {
  let newTileList = [];
  let rowIdx = 1;
  newList.map((row) => {
    let colList = [];
    let colIdx = 1;
    row.map((col) => {
      colList.push({
        col: colIdx,
        tile: `${rowIdx}-${colIdx}`,
        piece: col,
      });
      colIdx++;
    });

    newTileList.push({ row: rowIdx++, cols: colList });
  });

  return newTileList;
};
