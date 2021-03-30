import "./ErrorPage.css";

import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="error">
      <p className="error__title">404</p>
      <p className="error__text">Страница не найдена</p>
      <Link to="/" className="error__link">
        Назад
      </Link>
    </section>
  );
}

export default ErrorPage;
