import React from "react";
import MainEvent from "./MainEvent";
import Agenda from "./Agenda";
import Piece from "./Piece";
const Container = () => {
  return (
    <>
      <section class="container">
        <div class="headflex">
          <MainEvent
            title="Yassar « Wald Nass »"
            discription="Depuis Comedia en 2010, où il fut élu grand gagnant, Yassar ne cesse
          d’être sollicité, que ce soit sur le petit écran, ou sur les
          différentes scènes du Royaume."
            poster="https://tm5.ma/wp-content/uploads/2023/05/2023-06-10-yassar-wald-nass-a-rabat-15.jpeg"
          />
          <Agenda />
        </div>
        <div class="eventslistcontainer">
          <Piece
            title="نايضة تو"
            discription="وسيلة صابحي - هاجر الشركي - زهير ايت بنجدي - عادل أبا تراب - عبدالحق
          بلمجاهد"
            poster="https://tm5.ma/wp-content/uploads/2023/05/2023-06-06.jpeg"
            date="10 juin 2023"
            time="21:00"
            band="وسيلة صابحي - هاجر الشركي - زهير ايت بنجدي - عادل أبا تراب - عبدالحق
            بلمجاهد"
          />
        </div>
      </section>
    </>
  );
};
export default Container;
