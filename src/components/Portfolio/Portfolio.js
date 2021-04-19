import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__list">
          <li className="portfolio__link">
            <p className="portfolio__title-link">Статичный сайт</p>
            <a href="/" className="portfolio__cite">
              <img className="portfolio__icon-link" src={arrow} alt="ссылка" />
            </a>
          </li>
          <li className="portfolio__link">
            <p className="portfolio__title-link">Адаптивный сайт</p>
            <a
              href="https://alexmoren1664.github.io/russian-travel/index.html"
              className="portfolio__cite"
              target="blank"
            >
              <img className="portfolio__icon-link" src={arrow} alt="ссылка" />
            </a>
          </li>
          <li className="portfolio__link  portfolio__link_border_none">
            <p className="portfolio__title-link">Одностраничное приложение</p>
            <a
              href="https://alexmoren1664.github.io/mesto/index.html"
              className="portfolio__cite"
              target="blank"
            >
              <img className="portfolio__icon-link" src={arrow} alt="ссылка" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Portfolio;
