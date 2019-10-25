import React from "react";
import "./style.css";
import Dessert from "./dessert.jpg";
import Macaroon from "./macaroon.jpg";
import Cupcake from "./cupcake.jpg";


function HomeBody() {
  return (
    <div>
      <img id="img1"src={Dessert} />
      <img id="img2"src={Macaroon} />
      <img id="img3"src={Cupcake} />
    </div>
  );
}

export default HomeBody;
