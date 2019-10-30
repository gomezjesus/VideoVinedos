import React from "react";
import { connect } from "react-redux";
import { setFavorite, deleteFavorite } from "../actions/index";
import { Link } from "react-router-dom";
import "../assets/styles/components/Item.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove-icon.png";
import PropTypes from "prop-types";

const Item = props => {
  const {
    contentRating,
    cover,
    duration,
    title,
    type,
    year,
    id,
    isList
  } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration
    });
  };

  const handleDeleteFavorite = itemId => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
          </Link>
          {isList ? (
            <img
              className="carousel-item__details--img"
              src={removeIcon}
              alt="Plus Icon"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {year} {contentRating} {duration} minutos
        </p>
      </div>
    </div>
  );
};

Item.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  duration: PropTypes.number,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  type: PropTypes.string
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
};
export default connect(
  null,
  mapDispatchToProps
)(Item);
