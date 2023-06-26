import React from "react";
import "../css/Event.css";
const EventContainer = ({ title, poster, date, time, descpriton }) => {
  return (
    <>
      <div class="container left-side">
        <h2 class="title">{title}</h2>
        <div class="poster">
          <a href="#">
            <img align="left" src={poster} alt="poster" />
          </a>
        </div>
        <table class="table table-condensed spct">
          <tbody>
            <tr>
              <td class="date desc">
                تاريخ العرض
                <br />
                Date du Spectacle
              </td>
              <td class="value desc">
                <span class="glyphicon glyphicon-calendar"></span> {date}
                &nbsp;<span class="glyphicon glyphicon-time"></span>
                {time}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="event-description">
          <p>
            Boudchart et son équipe reviennent avec un programme musical
            envoûtant qui fera vibrer le théâtre Mohammed V à Rabat et emportera
            les spectateurs dans un voyage émotionnel inoubliable.
          </p>
          <p>
            Le public chantera à l’unisson les grands succès de la musique
            marocaine et orientale moderne et classique, fusionnant leurs voix
            pour ne faire plus qu’un avec la musique.
          </p>
        </div>
      </div>
    </>
  );
};
export default EventContainer;
