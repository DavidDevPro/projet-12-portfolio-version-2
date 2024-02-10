import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import ProjetsContent from "./pages/ProjetsContent";

const App = () => {
  return (
    <div>
      {/* navigation */}
      <Navigation />
      {/* main page content */}
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/projetscontent/:id" element={<ProjetsContent />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
