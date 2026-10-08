import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import SelectedWork from "./pages/selected-work";
export default function Routes() {
  return <BrowserRouter><RouterRoutes>
    <Route path="/" element={<SelectedWork />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </RouterRoutes></BrowserRouter>;
}
