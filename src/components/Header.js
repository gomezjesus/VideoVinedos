import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import usuario from "../assets/static/user-icon.png";
import gravatar from "../utils/gravatar";
import { Link } from "react-router-dom";
const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  console.log(props);
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={usuario} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/">Cuenta</a>
          </li>
          <li>
            <Link to="/login">Iniciar Sesion</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  null
)(Header);
