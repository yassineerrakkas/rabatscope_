import React from "react";
import Reservation from "../components/Reservation";
import EventContainer from "../components/EventContainer";
const Event = () => {
  return (
    <>
      <section class="containerEv">
        <EventContainer
          title="Boudchart"
          poster="https://tm5.ma/wp-content/uploads/2023/05/2023-06-11-.jpeg"
          date="11 juin 2023"
          time="18:00"
          descpriton=""
        />
        <Reservation />
      </section>
    </>
  );
};

export default Event;
