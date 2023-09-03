import React from "react";
import "./index.css";
function Carousel({ data, width }) {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div className="carousel-item-text">
        <div className="title-btn">
          <h2>{data.title}</h2>
          <p className="carusel-tex">{data.text}</p>
          <p className="carusel-tex">{data.texte}</p>
          <button className="corusel-button">Road More</button>
        </div>
      </div>
      <img className="carousel-img" src={data.img} />
    </div>
  );
}

export default Carousel;
