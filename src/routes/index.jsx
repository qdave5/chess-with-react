import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ChessPlay from "../pages/ChessPlay";
import ChessDemo from "../pages/ChessDemo";

const Routers = () => {
  return (
    <Fragment>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/play" element={<ChessPlay />} />
            <Route path="/demo" element={<ChessDemo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routers;
