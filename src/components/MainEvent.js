import React from "react";
import { Link } from "react-router-dom";

const MainEvent = ({ title, discription, poster }) => {
  return (
    <Link to="/Event" className="mevent">
      <div className="main_event_text_container">
        <div className="theater-title">{title}</div>
        <div className="theater-description">{discription}</div>
      </div>
      <div className="main-event-affiche">
        <img src={poster} alt="poster" />
      </div>
    </Link>
  );
};

export default MainEvent;
