import "./Login.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="register">
      <Header movieHeader={"register_header"} />
      <form className="register__form">
        <h2 className="register__title">Рады видеть!</h2>
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
        <button
          className="register__button register__button_type_login"
          type="submit"
        >
          Войти
        </button>
        <Link to="/signup" className="register__link">
          Ещё не зарегистрированы?
          <span className="register__link_login">&nbsp;Регистрация</span>
        </Link>
      </form>
    </section>
  );
}

export default Login;
