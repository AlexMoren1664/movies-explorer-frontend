import "./Login.css";
import HeaderForm from "../HeaderForm/HeaderForm";
import { Link } from "react-router-dom";
import Validation from "../Validation/Validation";

function Login(props) {
  const { values, handleChange, errors, isValid } = Validation();

  function handleSubmit(event) {
    event.preventDefault();
    props.onLogin(values.email, values.password);
  }

  return (
    <section className="register">
      <form className="register__form" onSubmit={handleSubmit} noValidate>
        <HeaderForm />
        <h2 className="register__title">Рады видеть!</h2>
        <div className="register__container">
          <p className="register__info">E-mail</p>
          <input
            name="email"
            type="email"
            className="register__input"
            placeholder="Введите Email"
            onChange={handleChange}
            required
            value={values.email || ""}
            autoComplete="off"
          ></input>
          <span className="register__validation">{errors.email}</span>
        </div>
        <div className="register__container">
          <p className="register__info">Пароль</p>
          <input
            name="password"
            type="password"
            className="register__input register__input_color_pink"
            placeholder="Введите пароль"
            required
            minLength="2"
            onChange={handleChange}
            value={values.password || ""}
            autoComplete="off"
          ></input>
          <span className="register__validation">{errors.password}</span>
        </div>
        <button
          disabled={!isValid}
          className={`register__button ${
            !isValid ? "register__button_type_disabled" : ""
          }`}
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
