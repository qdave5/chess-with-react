import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const ChessBoardTile = ({ piece, tileLocation, handleClickEvent }) => {
  return (
    <Button
      className="w-100 h-100"
      name={tileLocation}
      onClick={(e) => {
        e.preventDefault();
        handleClickEvent(e);
      }}
    >
      <p>{piece.image || " "}</p>
    </Button>
  );
};

export default ChessBoardTile;
