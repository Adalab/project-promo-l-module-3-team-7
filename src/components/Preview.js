import "../style/layout/Preview.scss";
import defaultImage from "../images/lee.jpg";
import PropTypes from "prop-types";
import Social from "./Social";

function Preview(props) {
  return (
    <section className="section__card">
      <div className="section__container">
        <button className="reset js-reset">
          <i className="fa fa-trash"></i>Reset
        </button>
        <div
          className={`card palette3card js_preview-card palette-${props.selectedPalette}`}
        >
          <div className="card__titles">
            <h3 className="card__titles--name js-preview-name">
              {props.name || "Nombre apellidos"}
            </h3>
            <h4 className="card__titles--job js-preview-job">
              {props.job || "Programadora front end"}
            </h4>
          </div>
          <div
            className="card__image js__profile-image"
            style={{ backgroundImage: `url(${props.avatar})` }}
          ></div>
          <div className="card__links--container">
            <ul className="logo__list">
              <Social
                aClass="tel"
                iClass="mobile"
                href={`tel:${props.phone}`}
              />
              <Social
                aClass="email"
                iClass="envelope-o"
                href={`mailto:${props.email}`}
              />
              <Social
                aClass="linkedin"
                iClass="linkedin"
                href={`https://www.linkedin.com/in/${props.linkedin}`}
              />
              <Social
                aClass="github"
                iClass="github-alt"
                href={`https://github.com/${props.github}`}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Preview.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Preview;
