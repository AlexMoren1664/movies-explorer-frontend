import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { useState } from "react";

function Profile(props) {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const currentUser = React.useContext(CurrentUserContext);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateUser(values);
  }

  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  return (
    <section className="profile">
      <Header
        loggedIn={props.loggedIn}
        isOpen={props.isOpen}
        movieHeader={"movies_header"}
      />
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <div className="profile__container">
          <p className="profile__info">Имя</p>
          <input
            required
            onChange={handleChange}
            value={values.name || ""}
            type="text"
            name="name"
            className="profile__input"
            autoComplete="off"
          ></input>
          <span className="profile__validation">{errors.name}</span>
        </div>
        <div className="profile__line"></div>
        <div className="profile__container">
          <p className="profile__info">E-mail</p>
          <input
            required
            onChange={handleChange}
            value={values.email || ""}
            type="email"
            name="email"
            className="profile__input"
            autoComplete="off"
          ></input>
          <span className="profile__validation">{errors.email}</span>
        </div>

        <button
          disabled={!isValid}
          className={`profile__button ${
            isValid ? "profile__button_disabled" : ""
          }`}
          type="submit"
        >
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
