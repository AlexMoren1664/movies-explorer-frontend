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
  const pathMovieImage = "https://api.nomoreparties.co";

  const buttonClassName = `card__button ${
    buttonLike ? "card__button_type_favorites" : ""
  }`;

  useEffect(() => {
    const localStorageSavedMovies = JSON.parse(
      localStorage.getItem("savedMovies")
    );
    const savedMovies = localStorageSavedMovies.some(
      (m) => m.movieId === card.id
    );
    if (savedMovies) {
      setButtonLike(true);
    } else {
      setButtonLike(false);
    }
  }, [card.id]);


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
        nameEN: card.nameEN
          ? card.nameEN
          : 'No name',
        nameRU: card.nameRU,
        image: card.image
          ? pathMovieImage + card.image.url
          : "https://web.nmsu.edu/~hbw3/_bookdown_files/image-not-found.jpg",
        trailer: card.trailerLink
          ? card.trailerLink
          : "https://youtube.com",
        year: card.year,
        movieId: card.id,
        thumbnail: card.image
          ? pathMovieImage + card.image.formats.thumbnail.url
          : "https://web.nmsu.edu/~hbw3/_bookdown_files/image-not-found.jpg",
        owner: card.owner,
      });
    } else {
      const newMoviesMe = moviesMe.find((m) => m.movieId === card.id);
      onMoviesDelete(newMoviesMe);
      setButtonLike(false);
    }
  }

  return (
    <li className="card">
      {isSavedMovies ? (
        <>
          <div className="card__info">
            <h3 className=" card__title"
              title={card.nameRU}
            >{card.nameRU}</h3>
            <p className="card__time">{card.duration + " мин"}</p>
          </div>
          <a className="card__trailer" href={card.trailer} target="blank">
            <img
              title={card.description}
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
            <h3 className=" card__title"
              title={card.nameRU}
            >{card.nameRU}</h3>
            <p className="card__time">{card.duration + " мин"}</p>
          </div>
          <img
            title={card.description}
            src={
              card.image !== null
                ? `https://api.nomoreparties.co${card.image.url}`
                : ""
            }
            alt={card.nameEN}
            className="card__img"
          >
          </img>
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