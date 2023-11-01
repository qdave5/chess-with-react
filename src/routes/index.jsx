import { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <Fragment>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routers;
