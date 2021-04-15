import Header from "../Header/Header";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  return (
    <>
      <section className="saved-movies">
        <Header
          loggedIn={props.loggedIn}
          movieHeader={"movies_header"}
          isOpen={props.isOpen}
        />
        <SearchForm
          savedMoviesSearch={props.savedMoviesSearch}
          searchShormSavedMovies={props.searchShormSavedMovies}
          checkbox={props.checkbox}
          isSavedMovies={props.isSavedMovies}
          loading={props.loading}
        />
        <MoviesCardList
          isSavedMovies={props.isSavedMovies}
          moviesMe={props.moviesMe}
          onMoviesDelete={props.onMoviesDelete}
          preloader={props.preloader}
        />
      </section>
      <Footer />
    </>
  );
}
export default SavedMovies;
