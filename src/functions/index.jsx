export const getColumnName = (index) =>
  ["A", "B", "C", "D", "E", "F", "G", "H"][index - 1];

export const getIndexFromRowCol = (row, col) => 8 * (row - 1) + (col - 1);
