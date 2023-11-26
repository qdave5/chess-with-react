import React, { useEffect } from "react";
import { Button } from "reactstrap";
import GameMode from "../../constant/GameMode";

const ChessBoardTile = ({ cell, isActive, handleClickEvent, gameMode }) => {
  useEffect(() => {}, [cell]);

  return (
    <Button
      className="w-100 h-100"
      style={{ minWidth: "50px", minHeight: "50px", padding: "12.5%" }}
      name={cell?.tile}
      active={isActive}
      disabled={gameMode === GameMode.Demo ? false : !isActive}
      onClick={() => handleClickEvent(cell?.tile)}
      color={"light"}
    >
      {(cell.piece.icon && cell.piece.icon) || " "}
    </Button>
  );
};

export default ChessBoardTile;
