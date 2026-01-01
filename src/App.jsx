import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClimateBackground from "./components/ui/ClimateBackground";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ClimateBackground />

      <Navbar />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
