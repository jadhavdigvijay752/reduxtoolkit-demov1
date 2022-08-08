import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
function RouteConfig() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default RouteConfig;
