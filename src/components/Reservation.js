import React, { useState } from "react";
import "../css/Event.css";
const Reservation = () => {
  const Row = () => {
    const RowElement = ({ Class }) => {
      return (
        <td>
          <div class={Class}></div>
        </td>
      );
    };
    return (
      <>
        <tr>
          <RowElement Class={"seat selected-seat"} />
          <RowElement Class={"seat"} />
          <td></td>
          <td></td>
          <td></td>
          <RowElement Class={"seat"} />
          <RowElement Class={"seat"} />
          <RowElement Class={"seat"} />
          <RowElement Class={"seat occupied-seat"} />
          <td></td>
          <td></td>
          <td></td>
          <RowElement Class={"seat"} />
          <RowElement Class={"seat"} />
        </tr>
      </>
    );
  };
  return (
    <>
      <div class="container right-side">
        <div class="reservation">
          <div class="price desc">
            <h3>select the seats the you want</h3>
          </div>
          <br />
          <div class="seats-lable">
            <ul>
              <li>
                <div class="seat"></div>
                <small>Available</small>
              </li>
              <li>
                <div class="seat selected-seat"></div>
                <small>Selected</small>
              </li>
              <li>
                <div class="seat occupied-seat"></div>
                <small>not Available</small>
              </li>
            </ul>
          </div>
          <br />
          <div class="hh">
            <div class="screen"></div>
          </div>
          <br />
          <div class="seats">
            <table>
              <Row></Row>
            </table>
          </div>
          <div class="categories"></div>
          <br />
          <p class="text desc">
            You selected <span id="count">0</span> seat, Your total is:
            <span class="total">0 MAD</span>
          </p>
          <br />
          <div class="reservation-btn">
            <button class="login">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reservation;
