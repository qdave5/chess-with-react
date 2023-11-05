import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const ChessBoardTile = ({ cell, handleClickEvent }) => {
  useEffect(() => {}, [cell]);

  return (
    <Button
      className="w-100 h-100"
      style={{ minWidth: "50px", minHeight: "50px", padding: "12.5%" }}
      name={cell?.tile}
      value={cell?.tile}
      onClick={(e) => {
        e.preventDefault();
        handleClickEvent(e);
      }}
    >
      {cell?.piece ? cell.piece.image : " "}
    </Button>
  );
};

export default ChessBoardTile;
