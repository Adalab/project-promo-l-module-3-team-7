import "../style/layout/Preview.scss";
import Social from "./Social";

function Preview() {
  return (
    <section className="section__card">
      <div className="section__container">
        <button className="reset js-reset">
          <i className="fa fa-trash"></i>Reset
        </button>
        <div className="card palette3card js_preview-card">
          <div className="card__titles">
            <h3 className="card__titles--name js-preview-name">
              Nombre apellidos
            </h3>
            <h4 className="card__titles--job js-preview-job">
              Programadora front end
            </h4>
          </div>
          <div className="card__image js__profile-image"></div>
          <div className="card__links--container">
            <ul class="logo__list">
              <Social aClass="tel" iClass="mobile" />
              <Social aClass="email" iClass="envelope-o" />
              <Social aClass="linkedin" iClass="linkedin" />
              <Social aClass="github" iClass="github-alt" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Preview;