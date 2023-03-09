import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar.js"
import Hero from "./components/Hero/Hero.js"
import Home from "./pages/home/Home.js"
import NotFound from "./pages/not-found/NotFound.js"
import APropos from "./pages/a-propos/APropos.js"
import FicheLogement from "./pages/fiche-logement/FicheLogement.js"

import Footer from "./components/Footer/Footer.js"


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
      <APropos />
      <Home />
      </div>
      <Footer />
    </div>
  );
}

// removed from App() until I know how to organize the different pages
// <Hero />
// <Home />
// <NotFound />
// <APropos />
// <FicheLogement />
