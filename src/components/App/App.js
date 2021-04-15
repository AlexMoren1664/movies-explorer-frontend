import React from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import "./App.css";
import mainApi from "../../utils/MainApi";
import { getMovies } from "../../utils/MoviesApi";
import ErrorPage from "../ErrorPage/ErrorPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [movies, setMovies] = useState([]);
  const [moviesMe, setMoviesMe] = useState([]);
  const [checkbox, setCheckbox] = useState(false);
  let isSavedMovies = true;
  const [preloader, setPreloader] = useState(false);
  const [permissionsChecked, setPermissionsChecked] = useState(false);

  function loading() {
    setPreloader(true);
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
  }

  function handleBurgerMenuClick() {
    setMenuOpen(true);
  }

  function closeBurgerMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      setPermissionsChecked(true);
      return;
    }
    setPermissionsChecked(true);
    mainApi.setToken(jwt);
    tokenCheck(jwt);
    setLoggedIn(true);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi.setToken(localStorage.getItem("jwt"));
      return Promise.all([
        mainApi.getUserInfo(),
        getMovies(),
        mainApi.getMovies(),
      ])
        .then(([info, infoMovies, infoMoviesMe]) => {
          setCurrentUser(info);
          localStorage.setItem("movies", JSON.stringify(infoMovies));
          localStorage.setItem("savedMovies", JSON.stringify(infoMoviesMe));
          const movies = JSON.parse(localStorage.getItem("movies"));
          const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
          setMovies(movies);
          setMoviesMe(savedMovies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  const localStorageMovies = JSON.parse(localStorage.getItem("movies"));
  const localStorageSavedMovies = JSON.parse(
    localStorage.getItem("savedMovies")
  );

  function addMovies(data) {
    mainApi
      .getNewMovies(data)
      .then((res) => {
        setMoviesMe([res, ...moviesMe]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegister(email, password, name) {
    mainApi
      .register(email, password, name)
      .then((res) => {
        if (res) {
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log("Ошибка:", err);
      });
  }

  function handleLogin(email, password) {
    mainApi
      .autorize(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          mainApi.setToken(res.token);
          history.push("/movies");
        }
      })
      .catch((err) => {
        alert("Неправильная почта или пароль");
        console.log("Ошибка:", err);
      });
  }

  function signOut() {
    localStorage.removeItem("jwt");
    history.push("/");
    setLoggedIn(false);
  }

  function handleMovieDelete(movie) {
    mainApi
      .deleteMovies(movie._id)
      .then(() => {
        const newMovies = moviesMe.filter((c) => c._id !== movie._id);
        setMoviesMe(newMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function tokenCheck(jwt) {
    mainApi
      .getContent(jwt)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log("Произошла ошибка:", err);
      })
      .finally(() => {
        setPermissionsChecked(true);
      });
  }

  function handleUpdateUser(data) {
    mainApi
      .editUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        history.push("/saved-movies");
      })
      .catch((err) => console.log(err));
  }

  function savedMoviesSearch(data) {
    const filterMovies = localStorageSavedMovies.filter((val) => {
      return val.nameRU.toLowerCase().includes(data.toLowerCase());
    });
    return setMoviesMe(filterMovies);
  }

  function moviesSearch(data) {
    const filterMovies = localStorageMovies.filter((val) => {
      return val.nameRU.toLowerCase().includes(data.toLowerCase());
    });
    return setMovies(filterMovies);
  }

  function searchShormSavedMovies() {
    const filterMovies = moviesMe.filter((val) => {
      return val.duration <= 40;
    });

    if (checkbox) {
      return (
        setMoviesMe(JSON.parse(localStorage.getItem("savedMovies"))),
        setCheckbox(false)
      );
    } else {
      setMoviesMe(filterMovies)
      setCheckbox(true);
    }
  }

  function searchShormMovies() {
    const filterMovies = movies.filter((val) => {
      return val.duration <= 40;
    });

    if (checkbox) {
      return (
        setMovies(JSON.parse(localStorage.getItem("movies"))),
        setCheckbox(false)
      );
    } else {
      setMovies(filterMovies)
      setCheckbox(true);
    }
  }

  if (!permissionsChecked) {
    return null;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} isOpen={handleBurgerMenuClick} />
          </Route>
          <Route path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>

          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            isOpen={handleBurgerMenuClick}
            movies={movies}
            moviesMe={moviesMe}
            addMovies={addMovies}
            moviesSearch={moviesSearch}
            checkbox={checkbox}
            searchShormMovies={searchShormMovies}
            loading={loading}
            preloader={preloader}
            onMoviesDelete={handleMovieDelete}
          />
          <ProtectedRoute
            loggedIn={loggedIn}
            path="/saved-movies"
            isSavedMovies={isSavedMovies}
            isOpen={handleBurgerMenuClick}
            moviesMe={moviesMe}
            checkbox={checkbox}
            savedMoviesSearch={savedMoviesSearch}
            searchShormSavedMovies={searchShormSavedMovies}
            onMoviesDelete={handleMovieDelete}
            loading={loading}
            preloader={preloader}
            component={SavedMovies}
          />

          <ProtectedRoute
            loggedIn={loggedIn}
            path="/profile"
            component={Profile}
            isOpen={handleBurgerMenuClick}
            onUpdateUser={handleUpdateUser}
            signOut={signOut}
          />

          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </div>
      <BurgerMenu isOpen={menuOpen} closeBurgerMenu={closeBurgerMenu} />
    </CurrentUserContext.Provider>
  );
}

export default App;
