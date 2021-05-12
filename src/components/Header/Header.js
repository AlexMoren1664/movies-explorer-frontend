import "./Header.css";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import burgerMenu from "../../images/burgermain.svg";

function Header(props) {
  return (
    <>
      <header className={`header ${props.movieHeader}`}>
        <Link to="/">
          <img src={logo} alt="movies" className="header__logo" />
        </Link>
        {props.loggedIn ? (
          <>
            <button
              type="button"
              className="header__burger-menu"
              onClick={props.isOpen}
            >
              <img
                src={burgerMenu}
                alt="menu"
                className="header__burger-icon"
              />
            </button>
            <ul className="header__links">
              <div className="movies__link-container">
                <Link to="/movies" className="header__movies">
                  Фильмы
                </Link>
                <Link
                  to="/saved-movies"
                  className="header__movies  header__movies_type_saved"
                >
                  Сохранённые фильмы
                </Link>
              </div>
              <Link
                to="/profile"
                className="header__movies header__movies_type_profile"
              ></Link>
            </ul>
          </>
        ) : (
          <>
            <div className="header__container-links">
              <Link to="/signup">
                <button
                  className="header__button header__button_type_registration"
                  type="button"
                >
                  Регистрация
                </button>
              </Link>
              <Link to="/signin">
                <button
                  className="header__button header__button_type_login"
                  type="button"
                >
                  Войти
                </button>
              </Link>
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default Header;
