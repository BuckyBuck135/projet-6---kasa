import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar.js"
import Home from "./pages/home/Home.js"
import NotFound from "./pages/not-found/NotFound.js"
import APropos from "./pages/a-propos/APropos.js"
import FicheLogement from "./pages/fiche-logement/FicheLogement.js"
import Footer from "./components/Footer/Footer.js"

// renders Navbar, Footer, and the 4 pages withing the container
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Home />
        <APropos />
        <FicheLogement />
        <NotFound />
      </div>
      <Footer />
    </div>
  );
}

// removed from App() until I know how to organize the different pages
// <Home />
// <NotFound />
// <APropos />
// <FicheLogement />
