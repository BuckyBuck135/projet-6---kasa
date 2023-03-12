import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar.js"
import Home from "./pages/home/Home.js"
import NotFound from "./pages/not-found/NotFound.js"
import APropos from "./pages/a-propos/APropos.js"
import FicheLogement from "./pages/fiche-logement/FicheLogement.js"
import Footer from "./components/Footer/Footer.js"

// renders Navbar, Footer, and the 4 pages withing the container
export default function App() {
  return (
    <BrowserRouter>
        <div className="app">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/fiche-logement/:id" element={<FicheLogement />} />
              <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

// removed from App() until I know how to organize the different pages
// <Home />
// <NotFound />
// <APropos />
// <FicheLogement />
