import "./Profile.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <Header
        movieHeader={"movies_header"}
        links={
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
        }
      />
      <form className="profile__form">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__container">
          <p className="profile__info">Имя</p>
          <input
            type="input"
            className="profile__input"
            defaultValue="Александр"
          ></input>
        </div>
        <div className="profile__line"></div>
        <div className="profile__container">
          <p className="profile__info">E-mail</p>
          <input
            type="input"
            className="profile__input"
            defaultValue="qwerty@yandex.ru"
          ></input>
        </div>

        <button className="profile__button" type="submit">
          Редактировать
        </button>
        <Link to="/" className="profile__button profile__button_exit">
          Выйти из аккаунта
        </Link>
      </form>
    </section>
  );
}

export default Profile;
