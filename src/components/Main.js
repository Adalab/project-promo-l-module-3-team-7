//import "../style/App.scss";
import Form from "./Form";
import Preview from "./Preview";
import "../style/layout/_card-page.scss";
import React, { useEffect, useState } from "react";

function Main() {
  console.log("Me estoy renderizando");
  // const savedUserDataInString = JSON.parse(localStorage.getItem("userDataAPC"));

  // const savedUserData = () => {
  //   if (localStorage.getItem("userDataAPC") !== null) {
  //     return JSON.parse(localStorage.getItem("userDataAPC"));
  //   }
  // };

  function getFromLocalStorage() {
    if (localStorage.getItem("userDataAPC") !== null) {
      return JSON.parse(localStorage.getItem("userDataAPC"));
    }
  }

  const savedUserData = getFromLocalStorage();

  console.log(savedUserData);

  // const savedUserData = localStorage.getItem("userDataAPC")
  //   ?
  //   : getUserData();

  const [selectedPalette, setSelectedPalette] = useState(
    savedUserData.palette || "1"
  );
  const [name, setName] = useState(savedUserData.name || "Nombre apellidos");
  const [job, setJob] = useState(savedUserData.job || "Programadora front end");
  const [email, setEmail] = useState(savedUserData.email || "");
  const [phone, setPhone] = useState(savedUserData.phone || "");
  const [linkedin, setLinkedin] = useState(savedUserData.linkedin || "");
  const [github, setGithub] = useState(savedUserData.github || "");

  console.log("palette:", selectedPalette);
  console.log("name:", name);
  console.log("job:", job);
  console.log("email:", email);
  console.log("phone:", phone);
  console.log("linkedin:", linkedin);
  console.log("github:", github);

  // const [selectedPalette, setSelectedPalette] = useState("1");
  // const [name, setName] = useState("Nombre apellidos");
  // const [job, setJob] = useState("Programadora front end");
  // const [email, setEmail] = useState("");
  // const [tel, setTel] = useState("");
  // const [linkedin, setLinkedin] = useState("");
  // const [github, setGithub] = useState("");

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
    } else if (field === "phone") {
      setPhone(ev.target.value);
    } else if (field === "linkedin") {
      setLinkedin(ev.target.value);
    } else if (field === "github") {
      setGithub(ev.target.value);
    }
  }

  const getUserData = () => {
    return {
      // photo: photo,
      palette: selectedPalette,
      name: name,
      job: job,
      email: email,
      phone: phone,
      linkedin: linkedin,
      github: github,
    };
  };

  useEffect(() => {
    console.log("Me estoy montando");
    const userData = getUserData();
    localStorage.setItem("userDataAPC", JSON.stringify(userData));
  });

  return (
    <main className="main">
      <Preview
        job={job}
        name={name}
        email={email}
        phone={phone}
        linkedin={linkedin}
        github={github}
        selectedPalette={selectedPalette}
      />
      <Form
        job={job}
        name={name}
        email={email}
        phone={phone}
        linkedin={linkedin}
        github={github}
        handleInput={handleInput}
        selectedPalette={selectedPalette}
        changePalette={handleChangePalette}
        getUserData={getUserData}
      />
    </main>
  );
}

export default Main;
