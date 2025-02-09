import Recipe from "./Recipe";
import { Route, Routes, Navigate } from "react-router";
import { CiSearch } from "react-icons/ci";
import TOC from "./TOC";
import Home from "./Home";
import About from "./About";
import "./index.css";
import {  Form, InputGroup } from "react-bootstrap";
import Coraline from "./Coraline";
import KrabbyPatty from "./KrabbyPatty";


export default function CineEats() {
  return (
    <div id="wd-labs">
      <header className="header">
        <h1 className="cineeats-logo">CineEats</h1>
        <TOC />
        <div className="search">
        <InputGroup className="search-bar">
            <InputGroup.Text className="search-icon">
              <CiSearch />
            </InputGroup.Text>
            <Form.Control
              id="wd-name"
              placeholder="Search"
              type="text"
              className="search-input"
            />
          </InputGroup>
           </div>
      </header>
     

        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Recipe" element={<Recipe />} />
          <Route path="About" element={<About />} />
          <Route path="KrabbyPatty" element={<KrabbyPatty />} />
          <Route path="Coraline" element={<Coraline />} />
        </Routes>
     
      
    </div>
  );
}