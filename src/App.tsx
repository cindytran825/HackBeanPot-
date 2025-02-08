

import './App.css'
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import CineEats from './CineEats';
import Home from './CineEats/Home';
import Recipe from './CineEats/Recipe';



export default function App() {


  return (
    <HashRouter>
      <div>
        <Routes>
        
          <Route path="/" element={<Navigate to="CineEats" />} />
          
          <Route path="/CineEats/*" element={<CineEats />} />
        </Routes>

      </div>
    </HashRouter>
  )
}


