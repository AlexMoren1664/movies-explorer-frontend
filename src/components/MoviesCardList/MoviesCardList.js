import "./MoviesCardList.css";

function MoviesCardList(props) {
  return (
    <section className="card-list">
      <ul className="card-list__container">{props.cards}</ul>
      {props.buttonElse}
    </section>
  );
}

export default MoviesCardList;
