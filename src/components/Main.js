//import "../style/App.scss";
import Form from "./Form";
import Preview from "./Preview";
import "../style/layout/_card-page.scss";
import React, { useState } from "react";

function Main() {
  const [selectedPalette, setSelectedPalette] = useState("1");
  const [name, setName] = useState("Nombre apellidos");
  const [job, setJob] = useState("Programadora front end");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const handleChangePalette = (ev) => {
    const newValue = ev.currentTarget.value;

    setSelectedPalette(newValue);
  };
  function handleInput(ev) {
    const field = ev.target.name;

    if (field === "name") {
      console.log(ev.target.value);
      setName(ev.target.value);
    } else if (field === "job") {
      setJob(ev.target.value);
    } else if (field === "email") {
      setEmail(ev.target.value);
    } else if (field === "tel") {
      setTel(ev.target.value);
    } else if (field === "linkedin") {
      setLinkedin(ev.target.value);
    } else if (field === "github") {
      setGithub(ev.target.value);
    }
  }

  return (
    <main className="main">
      <Preview
        job={job}
        name={name}
        email={email}
        tel={tel}
        linkedin={linkedin}
        github={github}
        selectedPalette={selectedPalette}
      />
      <Form
        handleInput={handleInput}
        selectedPalette={selectedPalette}
        changePalette={handleChangePalette}
      />
    </main>
  );
}

export default Main;
