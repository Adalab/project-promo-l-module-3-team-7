import "../style/layout/_card-page.scss";
import "../style/layout/_design.scss";
import "../style/layout/_form.scss";
import "../style/layout/_share.scss";
import Collapsable from "./Collapsable.js";
import Input from "./Input.js";

function Form() {
  return (
    <div className="collapsable-container">
      <section className="collapsable__wrap collapsable__design collapsable js-collapsable">
        <Collapsable title="Diseña" icon="fa-object-ungroup" />
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
      <section className="colapsable_form collapsable js-collapsable">
        <Collapsable title="Rellena" icon="fa-keyboard-o" />
        <div className="collapsable__content collapsable__content--form">
          <form className="form js-form" method="" action="">
            <Input name="name" label="Nombre completo" placeholder="Nombre completo" />
            <Input name="job" label="Puesto" placeholder="Profesión" />
            <div className="form__display--image">
              <div>
                <label className="form__label js-label-image" htmlFor="photo">
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
            <Input name="email" label="email" placeholder="nombre.apellido@example.com" type="email" />
            <Input name="phone" label="Telefono" placeholder="+34 666666666" type="tel" />

            <Input name="linkedin" label="Linkedin" placeholder="Nombre de usuario de LinkedIn" />
            <Input name="github" label="Github" placeholder="Nombre de usuario de GitHub" />


          </form>
        </div>
      </section>
      <section className="share collapsable js-collapsable collapsable--close">
        <Collapsable title="Comparte" icon="fa-share-alt" />
        <div className="collapsable__content collapsable__content--share">
          <button className="button__create link_animation js-create-btn">
            <i className="fa fa-address-card-o" aria-hidden="true"></i>Crear tarjeta
          </button>

          <div className="confirm__share js-card-result share-hidden">
            <p className="confirm__share--title">La tarjeta ha sido creada:</p>
            <a className="confirm__share--link" href=""></a>
          </div>
          <div className="rectangle"></div>
        </div>
      </section>
    </div>
  );
}

export default Form;
