import React from "react";

const MainEvent = ({ title, discription, poster }) => {
  return (
    <div className="mevent">
      <div className="main_event_text_container">
        <div className="theater-title">{title}</div>
        <div className="theater-description">{discription}</div>
      </div>
      <div className="main-event-affiche">
        <img src={poster} alt="poster" />
      </div>
    </div>
  );
};

export default MainEvent;
