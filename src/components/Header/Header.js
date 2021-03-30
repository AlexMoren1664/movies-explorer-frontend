import "./Header.css";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className={`header ${props.movieHeader}`}>
      <Link to="/">
        <img src={logo} alt="movies" className="header__logo" />
      </Link>
      {props.links}
    </header>
  );
}

export default Header;
