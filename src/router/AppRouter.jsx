import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Layout from "../components/layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
};

export default AppRouter;
