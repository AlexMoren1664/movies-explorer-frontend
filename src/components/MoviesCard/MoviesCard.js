import "./MoviesCard.css";
import img from "../../images/imgcard.jpg";

function MoviesCard(props) {
  return (
    <li className="card">
      <div className="card__info">
        <h3 className=" card__title">В погоне за Бенкси</h3>
        <p className="card__time">27 минут</p>
      </div>
      <img src={img} alt="ss" className="card__img"></img>
      <button type="button" className={`card__button ${props.button}`}></button>
    </li>
  );
}

export default MoviesCard;
