export const updateAllTiles = (tileList, newList) => {
  for (let index = 0; index < tileList.length; index++) {
    tileList[index] = { ...tileList[index], piece: newList[index] };
  }

  return tileList;
};
