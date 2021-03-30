import "./Main.css";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="content">
      <Header
        links={
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
        }
      />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
