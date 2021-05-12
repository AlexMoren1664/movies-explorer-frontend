import "./Register.css";
import HeaderForm from "../HeaderForm/HeaderForm";
import { Link } from "react-router-dom";
import Validation from '../Validation/Validation';

function Register(props) {
  const { values, handleChange, errors, isValid } = Validation();

  function handleSubmit(event) {
    event.preventDefault();
    props.onRegister(values.email, values.password, values.name);
  }


  return (
    <section className="register">
      <form className="register__form" 
      onSubmit={handleSubmit}
      noValidate
      >
        <HeaderForm />
        <h2 className="register__title">Добро пожаловать!</h2>
        <div className="register__container">
          <p className="register__info">Имя</p>
          <input
            type="text"
            name="name"
            minLength="2"
            maxLength="30"
            className="register__input"
            placeholder="Введите имя"
            required
            onChange={handleChange}
            value={values.name || ''}
            autoComplete="off"
          ></input>
           <span className="register__validation">{errors.name}</span>
        </div>
        <div className="register__container">
          <p className="register__info">E-mail</p>
          <input
            type="email"
            name="email"
            className="register__input"
            placeholder="Введите Email"
            required
            onChange={handleChange}
            value={values.email || ''}
            autoComplete="off"
          ></input>
           <span className="register__validation">{errors.email}</span>
        </div>
        <div className="register__container">
          <p className="register__info">Пароль</p>
          <input
            type="password"
            name="password"
            className="register__input register__input_color_pink"
            placeholder="Введите пароль"
            required
            minLength="2"
            onChange={handleChange}
            value={values.password || ''}
            autoComplete="off"
          ></input>
          <span className="register__validation">{errors.password}</span>
        </div>
        <button disabled={!isValid} className={`register__button ${!isValid ? "register__button_type_disabled" : ""}`} 
        type="submit" 
        >
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

