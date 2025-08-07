import { Navigate, Route, Router, Routes } from "react-router";
import "./App.css";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Preloader from "../src/components/Pre";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="/contact-us" element={<Contact />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
