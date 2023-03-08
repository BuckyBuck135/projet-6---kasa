import './css/App.css';
import React from "react";
import Navbar from "./components/Navbar.js"
import HomeHero from "./components/HomeHero.js"
import HomeMain from "./components/HomeMain.js"
import NotFound from "./components/NotFound.js"
import APropos from "./components/APropos.js"
import LogementMain from "./components/LogementMain.js"

import Footer from "./components/Footer.js"


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
      <HomeHero />
      <HomeMain />
      </div>
      <Footer />
    </div>
  );
}

// removed from App() until I know how to organize the different pages
// <HomeHero />
// <HomeMain />
// <NotFound />
// <APropos />
// <LogementMain />
