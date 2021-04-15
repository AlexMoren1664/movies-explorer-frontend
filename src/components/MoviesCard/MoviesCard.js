import "./MoviesCard.css";
import React, { useEffect, useState } from "react";

function MoviesCard({
  card,
  isSavedMovies,
  onMoviesDelete,
  addMovies,
  moviesMe,
}) {
  const [buttonLike, setButtonLike] = useState(false);

  const localStorageSavedMovies = JSON.parse(
    localStorage.getItem("savedMovies")
  );

  const savedMovies = localStorageSavedMovies.some(
    (m) => m.movieId === card.id
  );

  useEffect(() => {
    if (savedMovies) {
      setButtonLike(true);
    } else {
      setButtonLike(false);
    }
  }, [savedMovies]);

  const pathMovieImage = "https://api.nomoreparties.co";

  const buttonClassName = `card__button ${
    buttonLike ? "card__button_type_favorites" : ""
  }`;

  function handleDeleteClick() {
    onMoviesDelete(card);
  }

  function handleAddClick(e) {
    e.preventDefault();
    if (!buttonLike) {
      setButtonLike(true);
      addMovies({
        key: card.id,
        country: card.country ? card.country : " ",
        description: card.description,
        director: card.director,
        duration: card.duration,
        nameEN: card.nameEN,
        nameRU: card.nameRU,
        image: card.image
          ? pathMovieImage + card.image.url
          : "https://web.nmsu.edu/~hbw3/_bookdown_files/image-not-found.jpg",
        trailer: card.trailerLink,
        year: card.year,
        movieId: card.id,
        thumbnail: card.image
          ? pathMovieImage + card.image.formats.thumbnail.url
          : "https://web.nmsu.edu/~hbw3/_bookdown_files/image-not-found.jpg",
        owner: card.owner,
      });
    } else {
      setButtonLike(false);

      const newMoviesMe = moviesMe.find((m) => m.movieId === card.id);
      onMoviesDelete(newMoviesMe);
    }
  }

  return (
    <li className="card">
      {isSavedMovies ? (
        <>
          <div className="card__info">
            <h3 className=" card__title">{card.nameRU}</h3>
            <p className="card__time">{card.duration + " мин"}</p>
          </div>
          <a className="card__trailer" href={card.trailer} target="blank">
            <img
              src={card.image !== null ? card.image : ""}
              alt={card.nameEN}
              className="card__img"
            ></img>
          </a>

          <button
            type="submit"
            className="card__button card__button_type_removed"
            onClick={handleDeleteClick}
          />
        </>
      ) : (
        <>
          <div className="card__info">
            <h3 className=" card__title">{card.nameRU}</h3>
            <p className="card__time">{card.duration + " мин"}</p>
          </div>
          <img
            src={
              card.image !== null
                ? `https://api.nomoreparties.co${card.image.url}`
                : ""
            }
            alt={card.nameEN}
            className="card__img"
          ></img>
          <button
            type="submit"
            className={buttonClassName}
            onClick={handleAddClick}
          ></button>
        </>
      )}
    </li>
  );
}

export default MoviesCard;
