import "./Portfolio.css";
import arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__list">
          <li className="portfolio__link">
            <p className="portfolio__title-link">Статичный сайт</p>
            <Link to="/" className="portfolio__cite">
              <img className="portfolio__icon-link" src={arrow} alt="ссылка" />
            </Link>
          </li>
          <li className="portfolio__link">
            <p className="portfolio__title-link">Адаптивный сайт</p>
            <Link to="/" className="portfolio__cite">
              <img className="portfolio__icon-link" src={arrow} alt="ссылка" />
            </Link>
          </li>
          <li className="portfolio__link  portfolio__link_border_none">
            <p className="portfolio__title-link">Одностраничное приложение</p>
            <Link to="/" className="portfolio__cite">
              <img className="portfolio__icon-link" src={arrow} alt="ссылка" />
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Portfolio;
