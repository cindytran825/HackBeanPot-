import Recipe from "./Recipe";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Home from "./Home";
import "./index.css";

export default function CineEats() {
  return (
    <div id="wd-labs">
      <header className="header">
        <h1 className="cineeats-logo">CineEats</h1>
        <TOC />
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Recipe" element={<Recipe />} />
        </Routes>
      </div>
    </div>
  );
}