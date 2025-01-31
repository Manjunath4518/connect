import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import Footer from "./components/Footer";
import About from "./About";
import AboutUs from "./components/Aboutus";
import Home from "./Home";
import Event from "./components/Event";


import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home/>} />
      </Routes> 
       <Routes>
        <Route path="/aboutus" element={< About/>} />
      </Routes>
      <Routes Routes>
        <Route path="/events" element={< Event/>} />
      </Routes>
    </Router>
  );
};

export default App;
