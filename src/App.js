import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/design2dev">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
