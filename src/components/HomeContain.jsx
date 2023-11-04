import React from "react";
import { Label } from "reactstrap";
import ChessBoard from "./ChessBoard";
import { getDefaultTiles } from "../constructor/DefaultTiles";

const HomeContain = () => {
  const list = getDefaultTiles();

  return (
    <>
      <h1>CHESS GAME</h1>
      <Label>{"White"}'s Turn</Label>
      <div className="h-75 w-75 d-flex">
        <ChessBoard tileItems={list} />
      </div>
    </>
  );
};

export default HomeContain;
