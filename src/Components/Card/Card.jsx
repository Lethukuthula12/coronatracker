import React from 'react';
import "./card.styles.css";

const Card =(props)=> {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            className="card_img"
            src={props.img}
            alt="Avatar"
            style={{ width: "300px", height: "450px" }}
          />
        </div>
        <div class="flip-card-back">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="div-price">
            <h2 className="price">R{props.price}</h2>
          </div>

          <button className="btn btn-add-cart btn-card">{props.btnName}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;