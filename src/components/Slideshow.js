import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Slideshow.css";

const events = [
  { id: 1, title: "Tech Meetup 2025", img: "https://wallpaper.dog/large/10940914.jpg" },
  { id: 2, title: "Startup Workshop", img: "https://wallpaperaccess.com/full/640316.jpg" },
  //{ id: 3, title: "Hackathon Challenge", img: "/event3.jpg" },
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <img src={events[index].img} alt={events[index].title} className="slideshow-image" />
      <div className="slideshow-caption">{events[index].title}</div>
      {/* <button className="register-btn" onClick={() => navigate(`/register?event=${events[index].id}`)}>
        Register
      </button> */}
    </div>
  );
};

export default Slideshow;
