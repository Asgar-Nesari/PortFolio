import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Links from "./components/Links";
import Language from "./components/Language";
import Tools from "./components/Tools";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Language />
        <Tools/>
        <Links/>
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
