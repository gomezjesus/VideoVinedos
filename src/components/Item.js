import React from "react";
import "../assets/styles/components/Item.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import PropTypes from "prop-types";
const Item = ({ contentRating, cover, duration, title, type, year }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt="" />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src={playIcon}
          alt="Play Icon"
        />
        <img
          className="carousel-item__details--img"
          src={plusIcon}
          alt="Plus Icon"
        />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {year} {contentRating} {duration} minutos
      </p>
    </div>
  </div>
);

Item.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  duration: PropTypes.number,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  type: PropTypes.string
};
export default Item;
