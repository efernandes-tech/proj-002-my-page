import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
};

export default AppRoutes;
