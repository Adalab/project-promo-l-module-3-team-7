import "../style/layout/_card-page.scss";
import "../style/layout/_design.scss";
import "../style/layout/_form.scss";
import "../style/layout/_share.scss";

function Form() {
  return (
    <div className="collapsable-container">
      <section className="collapsable__wrap collapsable__design collapsable js-collapsable">
        {/* <include
          src="./collapsable-header.html"
          collapsableIcon="fa-object-ungroup"
          collapsableTitle=" Diseña"
        ></include> */}

        <div className="collapsable__content collapsable__content--design">
          <h3 className="design__title">colores</h3>

          <label className="display-block design__square-label">
            <input
              type="radio"
              name="palette"
              className="design__square-radio js_palette-select"
              value="1"
              checked
            />
            <ul className="palette-1-election">
              <li className="design__square-color color-1">Color A</li>
              <li className="design__square-color color-2">Color B</li>
              <li className="design__square-color color-3">Color C</li>
            </ul>
          </label>

          <label className="display-block design__square-label">
            <input
              type="radio"
              name="palette"
              value="2"
              className="design__square-radio js_palette-select"
            />
            <ul className="palette-2-election">
              <li className="design__square-color color-1">Color A</li>
              <li className="design__square-color color-2">Color B</li>
              <li className="design__square-color color-3">Color C</li>
            </ul>
          </label>

          <label className="display-block design__square-label">
            <input
              type="radio"
              name="palette"
              value="3"
              className="design__square-radio js_palette-select"
            />
            <ul className="palette-3-election">
              <li className="design__square-color color-1">Color A</li>
              <li className="design__square-color color-2">Color B</li>
              <li className="design__square-color color-3">Color C</li>
            </ul>
          </label>
        </div>
      </section>
      <section className="colapsable_form collapsable js-collapsable collapsable--close">
        {/* <include
          src="./collapsable-header.html"
          collapsableIcon="fa-keyboard-o"
          collapsableTitle="Rellena"
        ></include> */}
        <div className="collapsable__content collapsable__content--form">
          <form className="form js-form" method="" action="">
            <label className="form__label" for="name">
              Nombre completo
            </label>
            <input
              className="form__input js-name js-input-text"
              type="text"
              name="name"
              placeholder="Nombre completo"
              required
            />

            <label className="form__label" for="job">
              Puesto
            </label>
            <input
              className="form__input js-job js-input-text"
              type="text"
              name="job"
              id="job"
              placeholder="Profesión"
              required
            />

            <div className="form__display--image">
              <div>
                <label className="form__label js-label-image" for="photo">
                  Imagen de perfil
                </label>
                <button
                  className="btn__submit--image js__profile-trigger"
                  type="submit"
                  value="Anadir imagen"
                  name="photo"
                  id="photo"
                  required
                >
                  Añadir imagen
                </button>
                <input
                  type="file"
                  name=""
                  className="btn__submit--image action__hiddenField js__profile-upload-btn"
                />
              </div>
              <div className="form__preview--image js__profile-preview"></div>
            </div>
            <label className="form__label" for="email">
              Email
            </label>
            <input
              className="form__input js-email js-input-text"
              type="email"
              name="email"
              id="email"
              placeholder="nombre.apellido@example.com"
              required
            />

            <label className="form__label" for="phone">
              Telefono
            </label>
            <input
              className="form__input js-tel js-input-text"
              type="tel"
              name="phone"
              id="phone"
              placeholder="+34 666666666"
            />

            <label className="form__label" for="linkedin">
              Linkedin
            </label>
            <input
              className="form__input js-linkedin js-input-text"
              type="url"
              name="linkedin"
              id="linkedin"
              placeholder="Nombre de usuario de LinkedIn"
              required
            />

            <label className="form__label" for="github">
              Github
            </label>
            <input
              className="form__input js-github js-input-text"
              type="url"
              name="github"
              id="github"
              placeholder="Nombre de usuario de GitHub"
              required
            />
          </form>
        </div>
      </section>
      <section class="share collapsable js-collapsable collapsable--close">
        {/* <include
          src="./collapsable-header.html"
          collapsableIcon="fa-share-alt"
          collapsableTitle="Comparte"
        ></include> */}
        <div class="collapsable__content collapsable__content--share">
          <button class="button__create link_animation js-create-btn">
            <i class="fa fa-address-card-o" aria-hidden="true"></i>Crear tarjeta
          </button>

          <div class="confirm__share js-card-result share-hidden">
            <p class="confirm__share--title">La tarjeta ha sido creada:</p>
            <a class="confirm__share--link" href=""></a>
          </div>
          <div class="rectangle"></div>
        </div>
      </section>
    </div>
  );
}

export default Form;
