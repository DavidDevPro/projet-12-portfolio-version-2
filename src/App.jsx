import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Projets from "./pages/Projets";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      {/* particles js */}

      {/* navigation */}

      {/* main page content */}
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
