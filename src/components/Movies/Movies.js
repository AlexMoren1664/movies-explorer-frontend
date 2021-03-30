import Header from "../Header/Header";

import "./Movies.css";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
// import Preloader from '../Preloader/Preloader';
import burgerMenu from "../../images/burgermain.svg";
import ErrorPage from "../ErrorPage/ErrorPage";

function Movies(props) {
  return (
    <>
      <section className="movies">
        <Header
          isOpen={props.isOpen}
          movieHeader={"movies_header"}
          links={
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
          }
        />

        <SearchForm />

        <MoviesCardList
          cards={
            <>
              <MoviesCard button={"card__button_type_favorites"} />
              <MoviesCard button={"card__button_type_favorites"} />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard button={"card__button_type_favorites"} />
              <MoviesCard button={"card__button_type_favorites"} />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard button={"card__button_type_favorites"} />
              <MoviesCard />
            </>
          }
          buttonElse={
            <button type="button" className="card-list__button">
              Ещё
            </button>
          }
        />
      </section>
      <Footer />
      {/* <Preloader /> */}
      <ErrorPage />
    </>
  );
}

export default Movies;
