import "../style/layout/_card-page.scss";
import "../style/layout/_design.scss";
import "../style/layout/_form.scss";
import "../style/layout/_share.scss";
import Collapsable from "./Collapsable.js";
import Palette from "./Palette.js";
import Input from "./Input.js";
import ImageBtn from "./ImageBtn";
import React, { useState } from "react";

function Form() {
  let [isOpen, setOpen] = useState(true);
  let [classOpen, setClass] = useState("");
  const handleLegendClick = () => {
    setOpen(!isOpen);
    console.log(isOpen);
    // classOpen = isOpen ? "collapsable" : "";
    setClass((classOpen = isOpen ? "collapsable--close" : ""));
  };

  const defaultForm = ev => {
    ev.preventDefault();
  }
  
 
  return (
    <form method="" action="" className="collapsable-container" onSubmit={defaultForm}>
      <fieldset
        className={`collapsable__wrap collapsable  ${classOpen} js-collapsable`}
      >
        <Collapsable
          title="Diseña"
          icon="fa-object-ungroup"
          fieldset="design"
          click={handleLegendClick}
        >
          <h3 className="design__title">colores</h3>
          <Palette value="1" checked="true" />

          <Palette value="2" />

          <Palette value="3" />
        </Collapsable>
      </fieldset>
      <fieldset
        className={`colapsable_form collapsable js-collapsable ${classOpen}`}
      >
        <Collapsable
          title="Rellena"
          icon="fa-keyboard-o"
          fieldset="form"
          click={handleLegendClick}
        >
          <div className="form js-form">
            <Input
              name="name"
              label="Nombre completo"
              placeholder="Nombre completo"
            />
            <Input name="job" label="Puesto" placeholder="Profesión" />
            <ImageBtn />
            <Input
              name="email"
              label="email"
              placeholder="nombre.apellido@example.com"
              type="email"
            />
            <Input
              name="phone"
              label="Telefono"
              placeholder="+34 666666666"
              type="tel"
            />

            <Input
              name="linkedin"
              label="Linkedin"
              placeholder="Nombre de usuario de LinkedIn"
            />
            <Input
              name="github"
              label="Github"
              placeholder="Nombre de usuario de GitHub"
            />
          </div>
        </Collapsable>
      </fieldset>
      <fieldset className={`share collapsable js-collapsable ${classOpen}`}>
        <Collapsable
          title="Comparte"
          icon="fa-share-alt"
          fieldset="share"
          click={handleLegendClick}
        >
          <button className="button__create link_animation js-create-btn">
            <i className="fa fa-address-card-o" aria-hidden="true"></i>Crear
            tarjeta
          </button>

          <div className="confirm__share js-card-result share-hidden">
            <p className="confirm__share--title">La tarjeta ha sido creada:</p>
            <a className="confirm__share--link" href=""></a>
          </div>
          <div className="rectangle"></div>
        </Collapsable>
      </fieldset>
    </form>
  );
}

export default Form;
