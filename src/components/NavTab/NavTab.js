import "./NavTab.css";

function NavTab() {
  return (
    <section className="navigation">
      <nav className="navigation__block">
        <ul className="navigation__container">
          <li className="navigation__list">
            <a className="navigation__link" href="#about-project">
              О проекте
            </a>
          </li>
          <li className="navigation__list">
            <a className="navigation__link" href="#technologies">
              Технологии
            </a>
          </li>
          <li className="navigation__list">
            <a className="navigation__link" href="#about-me">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
