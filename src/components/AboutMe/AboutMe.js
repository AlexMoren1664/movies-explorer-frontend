import "./AboutMe.css";
import avatar from "../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h3 className="about-me__title">Студент</h3>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Александр</h3>
          <p className="about-me__job">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__content">
            Родился и вырос на Камчатке, но образование получил уже в столице.
            В 2016 году закончил Тимирязевскую академию. Веду активный образ жизни: если летом - это катание на велосипеде, то зимой катание на сноуборде, особенно в горах с друзьями. 
            Считаю главным в жизни является семья! С недавних пор начал кодить - это увлекательно и круто!
          </p>
          <a
            className="about-me__link"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            className="about-me__link"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me-avatar" alt="avatar" src={avatar} />
      </div>
    </section>
  );
}

export default AboutMe;
