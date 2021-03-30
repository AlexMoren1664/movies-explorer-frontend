import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__signature">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2021</p>
        <nav className="footer__links">
          <a
            className="footer__link"
            href="https://praktikum.yandex.ru/profile/web"
          >
            Яндекс.Практикум
          </a>
          <a className="footer__link" href="https://github.com/AlexMoren1664">
            Github
          </a>
          <a className="footer__link" href="https://www.facebook.com">
            Facebook
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
