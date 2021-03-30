import "./Register.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <Header movieHeader={"register_header"} />
      <form className="register__form">
        <h2 className="register__title">Добро пожаловать!</h2>
        <div className="register__container">
          <p className="register__info">Имя</p>
          <input
            type="input"
            className="register__input"
            placeholder="Введите имя"
          ></input>
        </div>
        <div className="register__container">
          <p className="register__info">E-mail</p>
          <input
            type="input"
            className="register__input"
            placeholder="Введите Email"
          ></input>
        </div>
        <div className="register__container">
          <p className="register__info">Пароль</p>
          <input
            type="password"
            className="register__input register__input_color_pink"
            placeholder="Введите пароль"
          ></input>
          <span className="register__validation">Что-то пошло не так...</span>
        </div>
        <button className="register__button" type="submit">
          Зарегистрироваться
        </button>
        <Link to="/signin" className="register__link">
          Уже зарегистрированы?
          <span className="register__link_login">&nbsp;Войти</span>
        </Link>
      </form>
    </section>
  );
}

export default Register;
