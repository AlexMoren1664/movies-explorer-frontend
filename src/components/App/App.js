import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./App.css";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleBurgerMenuClick() {
    setMenuOpen(true);
  }

  function closeBurgerMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="page">
        <Switch>
          <>
            <Route exact path="/">
              <Main />
            </Route>

            <Route path="/movies">
              <Movies isOpen={handleBurgerMenuClick} />
            </Route>

            <Route path="/saved-movies">
              <SavedMovies isOpen={handleBurgerMenuClick} />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
          </>
        </Switch>
      </div>
      <BurgerMenu
        isOpen={menuOpen}
        onClose={closeBurgerMenu}
        closeBurgerMenu={closeBurgerMenu}
      />
    </>
  );
}

export default App;
