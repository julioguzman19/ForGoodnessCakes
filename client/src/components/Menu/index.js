import React from "react";
import "./style.css";

function Menu() {
  return (

    <div class="row" class="container">
      <div class="col s12">

        <h4>Your Order</h4>
        <h4>Please Choose From Our Menu : </h4>


        <div id="flip"><h4>Our Pies For $10</h4></div>
        <div id="panel"><h5>Lemon Pie</h5>
          <h5>Apple Pie</h5><h5>Pumpkin </h5><h5>Napoleon</h5>
          <h5>Strawberry Madness</h5><h5>Dark Chocolate</h5>
        </div>

      </div>

    </div>
  );
}

export default Menu;
