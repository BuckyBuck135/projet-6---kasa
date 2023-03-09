import './css/App.css';
import React from "react";
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Main from "./components/Main.js"
import NotFound from "./components/NotFound.js"
import APropos from "./components/APropos.js"
import LogementMain from "./components/LogementMain.js"

import Footer from "./components/Footer.js"


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
      <Hero />
      <Main />
      </div>
      <Footer />
    </div>
  );
}

// removed from App() until I know how to organize the different pages
// <Hero />
// <Main />
// <NotFound />
// <APropos />
// <LogementMain />
