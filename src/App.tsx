

import './App.css'
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './assets/Home';


function App() {


  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="/Home/*" element={<Home />} />
          {/* <Route path="/Home/*" element={<Home />} /> */}
        </Routes>

      </div>
    </HashRouter>
  )
}

export default App
