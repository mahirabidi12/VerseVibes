import React from "react";
import Quran from "../pages/Quran.jsx";
import Bible from "../pages/Bible.jsx";
import Tanakh from "../pages/Tanakh.jsx";
import Geeta from "../pages/Geeta.jsx";
import Home from "../pages/Home.jsx";
import Review from "../pages/Review.jsx";
import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/bible" element={<Bible />} />
        <Route path="/tanakh" element={<Tanakh />} />
        <Route path="/geeta" element={<Geeta />} />
        <Route path="/review" element={<Review />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
