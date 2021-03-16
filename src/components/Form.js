import "../style/layout/_card-page.scss";
import "../style/layout/_design.scss";
import "../style/layout/_form.scss";
import "../style/layout/_share.scss";

import api from "../services/ApiServer.js";
import React, { useState } from "react";

//
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

//

import Collapsable from "./Collapsable.js";
import Palette from "./Palette.js";
import Input from "./Input.js";
import AvatarBtn from "./AvatarBtn";

function Form(props) {
  const [message, setMessage] = useState("");
  const [cardURL, setcardURL] = useState("");
  const [hiddenClass, setHiddenClass] = useState("share-hidden");
  const [visibilitySocialIcons, setvisibilitySocialIcons] = useState(
    "share-hidden"
  );

  // const handleCreateBtn = (ev) => {
  //   ev.preventDefault();

  //   fetchCard(props.userData).then((data) => {
  //     if (data.success === true) {
  //       setMessage("La tarjeta ha sido creada:");
  //       setcardURL(data.cardURL);
  //     } else {
  //       setMessage(data.error);
  //       setcardURL("");
  //     }
  //     setHiddenClass("");
  //   });
  // };
  const handleCreateBtn = (ev) => {
    ev.preventDefault();

    const url = "https://awesome-profile-cards.herokuapp.com/card";
    function dataSuccess(data) {
      setMessage("La tarjeta ha sido creada:");
      setcardURL(data.cardURL);
      setvisibilitySocialIcons("");
    }
    function dataError(data) {
      setMessage(data.error);
      setcardURL("");
    }

    // api
    //   .fetchCard(props.userData)
    fetch(url, {
      method: "POST",
      body: JSON.stringify(props.userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.success ? dataSuccess(data) : dataError(data);
        setHiddenClass("");
      });
  };

  return (
    <form method="" action="" className="collapsable-container">
      <Collapsable
        title="Diseña"
        icon="fa-object-ungroup"
        fieldset="design"
        isClose={false}
      >
        <h3 className="design__title">colores</h3>
        <Palette
          value="1"
          selectedPalette={props.selectedPalette}
          changePalette={props.changePalette}
        />

        <Palette
          value="2"
          selectedPalette={props.selectedPalette}
          changePalette={props.changePalette}
        />

        <Palette
          value="3"
          selectedPalette={props.selectedPalette}
          changePalette={props.changePalette}
        />
      </Collapsable>
      <Collapsable
        title="Rellena"
        icon="fa-keyboard-o"
        fieldset="form"
        isClose={true}
      >
        <div className="form js-form">
          <Input
            name="name"
            label="Nombre completo"
            placeholder="Nombre completo"
            value={props.name}
            handleInput={props.handleInput}
          />
          <Input
            name="job"
            label="Puesto"
            placeholder="Profesión"
            value={props.job}
            handleInput={props.handleInput}
          />

          <AvatarBtn
            avatar={props.avatar}
            updateAvatar={props.updateAvatar}
            isAvatarDefault={props.isAvatarDefault}
          />

          <Input
            name="email"
            label="email"
            placeholder="nombre.apellido@example.com"
            type="email"
            value={props.email}
            handleInput={props.handleInput}
          />
          <Input
            name="phone"
            label="Telefono"
            placeholder="+34 666666666"
            type="tel"
            value={props.phone}
            handleInput={props.handleInput}
          />

          <Input
            name="linkedin"
            label="Linkedin"
            placeholder="Nombre de usuario de LinkedIn"
            value={props.linkedin}
            handleInput={props.handleInput}
          />
          <Input
            name="github"
            label="Github"
            placeholder="Nombre de usuario de GitHub"
            value={props.github}
            handleInput={props.handleInput}
          />
        </div>
      </Collapsable>
      <Collapsable
        title="Comparte"
        icon="fa-share-alt"
        fieldset="share"
        isClose={true}
      >
        <button
          className="button__create link_animation js-create-btn"
          onClick={handleCreateBtn}
        >
          <i className="fa fa-address-card-o" aria-hidden="true"></i>Crear
          tarjeta
        </button>

        <div className={`confirm__share js-card-result ${hiddenClass}`}>
          <p className="confirm__share--title">{message}</p>
          {/* <p className="confirm__share--title">La tarjeta ha sido creada:</p> */}
          <a className="confirm__share--link" href={cardURL}>
            {cardURL}
          </a>
          <div className={`social-icons ${visibilitySocialIcons}`}>
            <p className="social-icons--title">Comparte tu nueva tarjeta:</p>
            <EmailShareButton
              url={cardURL}
              children={
                <EmailIcon
                  className="social-icons--icon"
                  size={32}
                  round={true}
                />
              }
              subject="Mi nueva tarjeta de visita"
              body="Te mando mi nueva tarjeta hecha por las Awesome Reacters. (Si quieres una igual, entra en https://beta.adalab.es/project-promo-l-module-3-team-7/#/)"
              separator=" => "
            />
            <FacebookShareButton
              url={cardURL}
              children={
                <FacebookIcon
                  className="social-icons--icon"
                  size={32}
                  round={true}
                />
              }
              quote="Mi nueva tarjeta de visita"
            />
            <TwitterShareButton
              url={cardURL}
              children={
                <TwitterIcon
                  className="social-icons--icon"
                  size={32}
                  round={true}
                />
              }
              title="Mi nueva tarjeta de visita"
            />
            <WhatsappShareButton
              url={cardURL}
              children={
                <WhatsappIcon
                  className="social-icons--icon"
                  size={32}
                  round={true}
                />
              }
              title="Mi nueva tarjeta de visita"
            />
            <TelegramShareButton
              url={cardURL}
              children={
                <TelegramIcon
                  className="social-icons--icon"
                  size={32}
                  round={true}
                />
              }
              title="Mi nueva tarjeta de visita"
            />
          </div>
        </div>
        {/* <div>
          <a
            className=""
            href={`https://twitter.com/intent/tweet?text=Mi%20nueva%20tarjeta%20${cardURL}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="">compartir en twitter</span>
          </a>
        </div> */}
        {/* <div>
          <EmailShareButton
            url={cardURL}
            children={<EmailIcon size={32} round={true} />}
            subject="Mi nueva tarjeta de visita"
            body="Te mando mi nueva tarjeta hecha por las Awesome Reacters. (Si quieres una igual, entra en https://beta.adalab.es/project-promo-l-module-3-team-7/#/)"
            separator=" => "
          />
          <FacebookShareButton
            url={cardURL}
            children={<FacebookIcon size={32} round={true} />}
            quote="Mi nueva tarjeta de visita"
          />
          <TwitterShareButton
            url={cardURL}
            children={<TwitterIcon size={32} round={true} />}
            title="Mi nueva tarjeta de visita"
          />
          <WhatsappShareButton
            url={cardURL}
            children={<WhatsappIcon size={32} round={true} />}
            title="Mi nueva tarjeta de visita"
          />
          <TelegramShareButton
            url={cardURL}
            children={<TelegramIcon size={32} round={true} />}
            title="Mi nueva tarjeta de visita"
          />
        </div> */}

        {/* <div
          className="fb-share-button"
          data-href={`https://${cardURL}`}
          data-layout="button"
          data-size="small"
        >
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fourbrandnewcard.com%2F&amp;src=sdkpreparse"
            className="fb-xfbml-parse-ignore"
            rel="noreferrer"
          >
            Share facebook
          </a>
        </div> */}
      </Collapsable>
    </form>
  );
}

export default Form;
