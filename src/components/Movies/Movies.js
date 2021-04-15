import Header from "../Header/Header";
import { useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
  const [quantityCards, setQuantityCards] = useState(12);

  useEffect(() => {
    if (window.innerWidth < 849) {
      setQuantityCards(8);
    }
    if (window.innerWidth < 400) {
      setQuantityCards(5);
    }
  }, []);

  const handleButtonAddMoviesClick = () => {
    if (window.innerWidth < 849) {
      return setQuantityCards(quantityCards + 2);
    } else {
      return setQuantityCards(quantityCards + 3);
    }
  };

  return (
    <>
      <section className="movies">
        <Header
          loggedIn={props.loggedIn}
          isOpen={props.isOpen}
          movieHeader={"movies_header"}
        />

        <SearchForm
          moviesSearch={props.moviesSearch}
          searchShormMovies={props.searchShormMovies}
          checkbox={props.checkbox}
          loading={props.loading}
        />

        <MoviesCardList
          handleDeleteSavedMovies={props.handleDeleteSavedMovies}
          moviesMe={props.moviesMe}
          quantityCards={quantityCards}
          movies={props.movies}
          handleLike={props.handleLike}
          addMovies={props.addMovies}
          preloader={props.preloader}
          onMoviesDelete={props.onMoviesDelete}
          buttonElse={
            props.movies.length <= quantityCards ? null : (
              <button
                type="button"
                className="card-list__button"
                onClick={handleButtonAddMoviesClick}
              >
                Ещё
              </button>
            )
          }
        />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
