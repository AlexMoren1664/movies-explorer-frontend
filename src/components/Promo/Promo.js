import "./Promo.css";
import practikum from "../../images/landing-logo.svg";

function Promo() {
  return (
    <section className="lead">
      <h1 className="lead__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img src={practikum} alt="Практикум" className="lead__image" />
    </section>
  );
}

export default Promo;
