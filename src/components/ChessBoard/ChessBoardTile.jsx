import React, { useEffect } from "react";
import { Button } from "reactstrap";
import { PieceSide } from "../../constant/PieceSide";

const ChessBoardTile = ({ cell, isActive, handleClickEvent }) => {
  useEffect(() => {}, [cell]);

  return (
    <Button
      className="w-100 h-100"
      style={{ minWidth: "50px", minHeight: "50px", padding: "12.5%" }}
      name={cell?.tile}
      active={isActive}
      disabled={!isActive}
      onClick={() => handleClickEvent(cell?.tile)}
      color={"light"}
    >
      {(cell.piece.icon && cell.piece.icon) || " "}
    </Button>
  );
};

export default ChessBoardTile;
