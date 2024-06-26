import { useContext } from "react";

import "./Header.css";
import logo from "../../images/wtwr.svg";
// import avatar from "../../images/Avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { NavLink } from "react-router-dom";

const WeatherCity = "New York City";
const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ onCreateModal, isLoggedIn, handleRegister, handleLogin }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <div className="header__currentDate">
            {currentDate}, {WeatherCity}
          </div>
        </div>
      </div>
      <div className="header__container_user">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <div
              className="header__add-clothes"
              type="text"
              onClick={onCreateModal}
            >
              + Add New Clothes
            </div>
            <NavLink to="/profile">
              <p className="header__name-person">{currentUser.name}</p>
            </NavLink>
            <div>
              <img
                className="header__avatar-logo"
                src={currentUser.avatar}
                alt="User avatar"
              />
            </div>
          </>
        ) : (
          <>
            <button
              className="nav__register-button"
              type="button"
              onClick={handleRegister}
            >
              <div className="header__sign-up">Sign up</div>
            </button>
            <button
              className="nav__login-button"
              type="button"
              onClick={handleLogin}
            >
              <div className="header__log-in">Log in</div>
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
