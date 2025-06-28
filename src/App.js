import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./components/Home";
import FAQ from "./components/FAQ";
=======
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import { APP_CONFIG } from "./constants/config";
>>>>>>> 97cdd20 (Refactor file structure: extract pages to separate folder and improve organization)
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={APP_CONFIG.BASE_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
