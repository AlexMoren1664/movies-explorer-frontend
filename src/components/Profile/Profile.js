import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { useState } from "react";

function Profile(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleCangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateUser({
      name,
      email,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return (
    <section className="profile">
      <Header
        loggedIn={props.loggedIn}
        isOpen={props.isOpen}
        movieHeader={"movies_header"}
      />
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {name}!</h2>
        <div className="profile__container">
          <p className="profile__info">Имя</p>
          <input
            onChange={handleChangeName}
            value={name || ""}
            type="text"
            name="name"
            className="profile__input"
          ></input>
        </div>
        <div className="profile__line"></div>
        <div className="profile__container">
          <p className="profile__info">E-mail</p>
          <input
            onChange={handleCangeEmail}
            value={email || ""}
            type="email"
            name="email"
            className="profile__input"
          ></input>
        </div>

        <button className="profile__button" type="submit">
          Редактировать
        </button>
        <button
          type="button"
          className="profile__button profile__button_exit"
          onClick={props.signOut}
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
