import React from "react";
import "./card.styles.css";

const Card2 = (props) => {
  return (
    <div class="flip-card2">
      <div class="flip-card-inner2">
        <div class="flip-card-front2">
          <img
            className="card_img"
            src={props.img}
            alt="Avatar"
            style={{ width: "300px", height: "410px" }}
          />
          <p>{props.description}</p>
          <div className="price">
            <span>R{props.price}</span>
          </div>

          <button className="btn btn-add-cart">{props.btnName}</button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
