import { useState } from "react";
import "./SearchForm.css";

function SearchForm(props) {
  const [search, setSearch] = useState("");

  function handleChengeMovies(event) {
    setSearch(event.target.value);
  }

  function handleSubmitSavedMovies(e) {
    e.preventDefault();
    setSearch("");
    props.loading();
    props.savedMoviesSearch(search);
  }

  function handleSubmitMovies(e) {
    e.preventDefault();
    setSearch("");
    props.loading();
    props.moviesSearch(search);
  }

  return (
    <section className="search">
      {props.isSavedMovies ? (
        <>
          <form className="search__form" onSubmit={handleSubmitSavedMovies}>
            <input
              type="text"
              name="search"
              id="search-input"
              className="search__input"
              placeholder="Фильм"
              required
              value={search || ""}
              onChange={handleChengeMovies}
            ></input>
            <button type="submit" className="search__button"></button>
          </form>
          <form
            className="search__form-checkbox"
            onChange={props.searchShormSavedMovies}
            checked={props.checkbox}
          >
            <label className="search__label">
              <input type="checkbox" className="search__checkbox"></input>
              <span className="search__label-title">Короткометражки</span>
            </label>
          </form>
        </>
      ) : (
        <>
          <form className="search__form" onSubmit={handleSubmitMovies}>
            <input
              type="text"
              name="search"
              id="search-input"
              className="search__input"
              placeholder="Фильм"
              required
              value={search || ""}
              onChange={handleChengeMovies}
            ></input>
            <button type="submit" className="search__button"></button>
          </form>
          <form
            className="search__form-checkbox"
            onChange={props.searchShormMovies}
            checked={props.checkbox}
          >
            <label className="search__label">
              <input type="checkbox" className="search__checkbox"></input>
              <span className="search__label-title">Короткометражки</span>
            </label>
          </form>
        </>
      )}
    </section>
  );
}
export default SearchForm;
