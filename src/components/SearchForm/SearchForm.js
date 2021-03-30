import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input
          type="text"
          className="search__input"
          placeholder="Фильм"
          required
        ></input>
        <button type="submit" className="search__button"></button>
      </form>
      <form className="search__form-checkbox">
        <label className="search__label">
          <input type="checkbox" className="search__checkbox"></input>
          <span className="search__label-title">Короткометражки</span>
        </label>
      </form>
    </section>
  );
}
export default SearchForm;
