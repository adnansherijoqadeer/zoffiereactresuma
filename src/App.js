import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Templates from "./pages/Templates";
import ViewTemplate from "./pages/ViewTemplate";
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/view_design" element={<ViewTemplate />} />

        </Routes>
      </Router>
    </>
  )
}
export default App