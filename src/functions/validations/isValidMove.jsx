import { PieceSide } from "../../constant/PieceSide";
import PieceType from "../../constant/PieceType";

export const isValidMove = (tileItems, source, validMove, index, lastStep) => {
  const listValidMove = [];

  if (source?.piece.type === PieceType.Pawn) {
    listValidMove.push(isValidMovePawn(tileItems, source, validMove, lastStep));
  } else {
    listValidMove.push(isValidMoveOther(tileItems, source, validMove));
  }

  return listValidMove.flat().includes(index);
};

const isValidMovePawn = (tileItems, source, validMove, lastStep) => {
  let listTile = [];

  const idxFront = validMove[0];
  const idxOther = [validMove[1], validMove[2]].flat();
  const idxEnPassant = [validMove[3], validMove[4]].flat();

  // front
  for (var idx = 0; idx < 2; idx++) {
    if (tileItems[idxFront[idx]]?.piece.side === PieceSide.Empty) {
      listTile.push(idxFront[idx]);
    }
  }

  // front-right / front-left
  for (var idx = 0; idx < 2; idx++) {
    if (
      tileItems[idxOther[idx]]?.piece.side !== source?.piece.side &&
      tileItems[idxOther[idx]]?.piece.side !== PieceSide.Empty
    ) {
      listTile.push(idxOther[idx]);
    }
  }

  // en passant
  for (var idx = 0; idx < 2; idx++) {
    if (
      tileItems[idxEnPassant[idx]]?.piece.side !== source?.piece.side &&
      tileItems[idxEnPassant[idx]]?.piece.side !== PieceSide.Empty &&
      tileItems[idxEnPassant[idx]]?.piece.lastMove === lastStep &&
      [4, 5].includes(tileItems[idxEnPassant[idx]]?.row)
    ) {
      listTile.push(idxOther[idx]);
    }
  }

  return listTile;
};

const isValidMoveOther = (tileItems, source, validMove) =>
  validMove
    .map((listIdx) => {
      let listTile = [];
      for (var idx = 0; idx < listIdx.length; idx++) {
        if (tileItems[listIdx[idx]]?.piece.side === PieceSide.Empty) {
          listTile.push(listIdx[idx]);
        } else if (tileItems[listIdx[idx]]?.piece.side === source?.piece.side) {
          break;
        } else {
          listTile.push(listIdx[idx]);
          break;
        }
      }

      return listTile;
    })
    .flat();
