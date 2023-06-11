import React from "react";
const EventInag = ({ date, month, title, time }) => {
  return (
    <>
      <div class="event">
        <div class="event-left">
          <div class="event-date">
            <div class="date">{date}</div>
            <div class="month">{month}</div>
          </div>
        </div>
        <div class="event-right">
          <h3 class="event-title">{title}</h3>
          <div class="event-timing">
            <img src={require("../images/timeicon.png")} alt="timeicon" />
            {time}
          </div>
        </div>
      </div>
    </>
  );
};
export default EventInag;
