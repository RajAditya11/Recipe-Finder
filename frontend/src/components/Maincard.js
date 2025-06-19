import React from "react";
import "../styles/Maincard.css";

const Maincard = ({ image, title, ingredients, recipe }) => {
  return (
    <div className="maincard">
      <div className="upper-card">
        <div className="upper-left">
          <div className="main-image">
            <img src={image} alt={title} className="main-img" />
          </div>

          <div className="main-title">
            <h1 className="main-title-name">{title}</h1>
          </div>
        </div>

        <div className="upper-right">
          <div className="main-ingredients">
            <h1 className="ingredients">Ingredients</h1>

            <p className="ingredients-list">{ingredients}</p>
          </div>
        </div>
      </div>

      <div className="lower-card">
        <div className="lower-body"></div>

        <div className="lower-footer"></div>
      </div>
    </div>
  );
};

export default Maincard;
