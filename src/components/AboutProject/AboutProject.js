import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__container">
        <div className="about-project__stage">
          <h2 className="about-project__stage-name">
            Дипломный проект включал 5 этапов
          </h2>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__stage">
          <h2 className="about-project__stage-name">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__progress">
        <div className="about-project__two-column about-project__two-column_type_backend">
          <p className="about-project__two-column-stage about-project__two-column-stage_type_backend">
            1 неделя
          </p>
          <span className="about-project__dev">Back-end</span>
        </div>
        <div className="about-project__two-column about-project__two-column_type_frontend">
          <p className="about-project__two-column-stage about-project__two-column-stage_type_frontend">
            4 недели
          </p>
          <span className="about-project__dev">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
