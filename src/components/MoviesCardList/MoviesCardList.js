import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  return (
    <section className="card-list">
      {props.preloader ? (
        <Preloader />
      ) : (
        <>
          {props.isSavedMovies ? (
            <ul className="card-list__container">
              {props.moviesMe.length === 0 ? (
                <p className="card-list__message">Ничего не найдено</p>
              ) : (
                props.moviesMe.map((data) => {
                  return (
                    <MoviesCard
                      movies={props.movies}
                      isSavedMovies={props.isSavedMovies}
                      card={data}
                      key={data.movieId || data.id}
                      onMoviesDelete={props.onMoviesDelete}
                    />
                  );
                })
              )}
            </ul>
          ) : (
            <ul className="card-list__container">
              {props.movies.length === 0 ? (
                <p className="card-list__message">Ничего не найдено</p>
              ) : (
                props.movies.slice(0, props.quantityCards).map((data) => {
                  return (
                    <MoviesCard
                      handleDeleteSavedMovies={props.handleDeleteSavedMovies}
                      moviesMe={props.moviesMe}
                      card={data}
                      key={data.id}
                      addMovies={props.addMovies}
                      handleLike={props.handleLike}
                      onMoviesDelete={props.onMoviesDelete}
                    />
                  );
                })
              )}
            </ul>
          )}
        </>
      )}

      {props.buttonElse}
    </section>
  );
}

export default MoviesCardList;