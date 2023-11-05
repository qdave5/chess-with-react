import React from "react";
import { Label } from "reactstrap";
import ChessBoard from "./ChessBoard";
import { getDefaultPieces, getEmptyTiles } from "../constructor/Tiles";
import { updateAllTiles } from "../functions/Tiles";

const HomeContain = () => {
  const list = getDefaultPieces();
  const tileList = getEmptyTiles();
  const updateList = updateAllTiles(tileList, list);

  const handleClickEvent = (e) => {
    console.log("e", e);
    console.log("e.target", e.target.name);
  };

  return (
    <>
      <h1>CHESS GAME</h1>
      <Label>{"White"}'s Turn</Label>
      <div className="h-75 w-75 d-flex">
        <ChessBoard tileItems={list} handleClickEvent={handleClickEvent} />
      </div>
    </>
  );
};

export default HomeContain;
