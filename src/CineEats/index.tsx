
import Recipe from "./Recipe";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Home from "./Home";
import "./index.css";



export default function CineEats() {
  return (
    <div id="wd-labs">
      <h1 className="cineeats-logo">CineEats</h1>
      <h3 className="cineeats-logo"> Cindy Tran Section 2e,rflmlf</h3>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<Home />} />
        <Route path="Recipe" element={<Recipe />} />
      </Routes>

    </div>
);}