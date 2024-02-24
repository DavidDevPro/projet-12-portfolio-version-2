import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PageProjets from "./pages/PageProjets";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import PageOneProjet from "./pages/PageOneProjet";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* navigation */}
      <Navigation />
      {/* main page content */}
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projets" element={<PageProjets />} />
        <Route path="/projet/:id" element={<PageOneProjet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
