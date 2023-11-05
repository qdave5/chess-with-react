import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const ChessBoardTile = ({ piece, tileLocation }) => {
  return (
    <Button
      className="w-100 h-100"
      onClick={(e) => {
        e.preventDefault();
        console.log(`${tileLocation} is clicked`);
      }}
    >
      <p>{piece.image || " "}</p>
    </Button>
  );
};

export default ChessBoardTile;
