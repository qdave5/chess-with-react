import React, { useEffect } from "react";
import { Button } from "reactstrap";

const ChessBoardTile = ({ cell, handleClickEvent }) => {
  useEffect(() => {}, [cell]);

  return (
    <Button
      className="w-100 h-100"
      style={{ minWidth: "50px", minHeight: "50px", padding: "12.5%" }}
      name={cell?.tile}
      onClick={() => handleClickEvent(cell?.tile)}
    >
      {(cell.piece.icon && cell.piece.icon) || " "}
    </Button>
  );
};

export default ChessBoardTile;
