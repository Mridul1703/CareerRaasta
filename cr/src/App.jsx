import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/faq";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Policy from "./components/Policy";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/service-terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<Policy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
