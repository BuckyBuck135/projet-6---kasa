import './css/App.css';
import React from "react";
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Main from "./components/Main.js"

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Main />
    </div>
  );
}
