import "./HeaderForm.css";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function HeaderForm() {
  return (
    <Link to="/">
      <img src={logo} alt="movies" className="header-form__logo" />
    </Link>
  );
}

export default HeaderForm;
