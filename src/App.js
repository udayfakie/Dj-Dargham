import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import About from "./screens/About";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Gallery from "./components/gallery/Gallery";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
      
    </>
  );
};

export default App;
