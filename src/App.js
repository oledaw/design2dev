import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import "./App.css";

function App() {
  return (
    <Router basename="/design2dev">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
