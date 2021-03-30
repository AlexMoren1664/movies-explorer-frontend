import "./Techs.css";

function Techs() {
  return (
    <section className="about-technologies" id="technologies">
      <h2 className="about-technologies__title">Технологии</h2>
      <h3 className="about-technologies__subtitle">7 технологий</h3>
      <p className="about-technologies__content">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="about-technologies__list">
        <li className="about-technologies__item">HTML</li>
        <li className="about-technologies__item">CSS</li>
        <li className="about-technologies__item">JS</li>
        <li className="about-technologies__item">React</li>
        <li className="about-technologies__item">Git</li>
        <li className="about-technologies__item">Express.js</li>
        <li className="about-technologies__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
