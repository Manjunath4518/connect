import React from 'react'
import Slideshow from './Slideshow';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";

function Event() {
  return (
    <div>
        <>
      <Navbar />
      <Slideshow />
      <Card/>
      <Footer />
    </>
    </div>
  )
}

export default Event
