import React from "react";

const Piece = ({ title, discription, poster, date, time, band }) => {
  return (
    <div class="piece">
      <div class="piece-affiche">
        <img src={poster} alt="poster" />
      </div>
      <div class="event-caption">
        <div class="piece-title">{title}</div>
        <table class="event-caption-table">
          <tbody>
            <tr>
              <td class="title">
                تاريخ العرض
                <br />
                Date du Spectacle
              </td>
              <td class="value">
                <span class="glyphicon glyphicon-calendar"></span>
                <span>{date}</span>&nbsp;
                <span class="glyphicon glyphicon-time"></span>
                <span>{time}</span>
              </td>
            </tr>
            <tr>
              <td class="title">
                الفرقة
                <br />
                Troup
              </td>
              <td class="value">{band}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p class="event-discription">{discription}</p>
      </div>
    </div>
  );
};

export default Piece;
