import React from "react";
import EventInag from "./EventInag";

const Agenda = () => {
  return (
    <>
      <div class="agenda">
        <div class="event-container">
          <EventInag
            date="02"
            month="juin"
            title="BALLET DON QUICHOTTE"
            time="19:40"
          />
        </div>
      </div>
    </>
  );
};

export default Agenda;
