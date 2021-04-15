import "./BurgerMenu.css";
import { Link } from "react-router-dom";

function burgerMenu(props) {
  return (
    <section
      className={`burger-menu ${props.isOpen ? "burger-menu_open" : ""}`}
    >
      <button
        type="button"
        className="burger-menu__button"
        onClick={props.closeBurgerMenu}
      ></button>
      <nav className="burger-menu__navigation">
        <div className="burger-menu__container">
          <Link to="/" className="burger-menu__link">
            <p
              className="burger-menu__name-link"
              onClick={props.closeBurgerMenu}
            >
              Главная
            </p>
          </Link>
          <Link
            to="/movies"
            className="burger-menu__link"
            onClick={props.closeBurgerMenu}
          >
            <p
              className="burger-menu__name-link"
              onClick={props.closeBurgerMenu}
            >
              Фильмы
            </p>
          </Link>
          <Link
            to="/saved-movies"
            className="burger-menu__link"
            onClick={props.closeBurgerMenu}
          >
            <p
              className="burger-menu__name-link"
              onClick={props.closeBurgerMenu}
            >
              Сохранённые фильмы
            </p>
          </Link>
        </div>
        <Link
          to="/profile"
          className="burger-menu__link burger-menu__link_type-profile"
          onClick={props.closeBurgerMenu}
        ></Link>
      </nav>
    </section>
  );
}

export default burgerMenu;
