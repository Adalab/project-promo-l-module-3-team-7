import "../style/layout/Preview.scss";

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
              <ul className="logo__list">
                <li className="logo__list--item js-logo-list hidden">
                  <a className="link__card js-preview-tel" title="">
                    <i className="fa fa-mobile" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="logo__list--item js-logo-list hidden">
                  <a className="link__card js-preview-email" href="" title="">
                    <i className="fa fa-envelope-o"></i>
                  </a>
                </li>
                <li className="logo__list--item js-logo-list hidden">
                  <a
                    className="link__card js-preview-linkedin"
                    href=""
                    title=""
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="logo__list--item js-logo-list hidden">
                  <a className="link__card js-preview-github" href="" title="">
                    <i className="fa fa-github-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Preview;